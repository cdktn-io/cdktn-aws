// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsWorkflowConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#description AwsWorkflow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#id AwsWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#region AwsWorkflow#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#tags AwsWorkflow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#tags_all AwsWorkflow#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * on_exception_steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#on_exception_steps AwsWorkflow#on_exception_steps}
  */
  readonly onExceptionSteps?: AwsWorkflow.OnExceptionStepsProperty[] | cdktn.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#steps AwsWorkflow#steps}
  */
  readonly steps: AwsWorkflow.StepsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow aws_transfer_workflow}
*/
export class AwsWorkflow extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsWorkflow resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsWorkflow to import
  * @param importFromId The id of the existing AwsWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow aws_transfer_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsWorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: AwsWorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_workflow',
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
    this._description = config.description;
    this._id = config.id;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._onExceptionSteps.internalValue = config.onExceptionSteps;
    this._steps.internalValue = config.steps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // on_exception_steps - computed: false, optional: true, required: false
  private _onExceptionSteps = new AwsWorkflow.OnExceptionStepsPropertyList(this, "on_exception_steps", false);
  public get onExceptionSteps() {
    return this._onExceptionSteps;
  }
  public putOnExceptionSteps(value: AwsWorkflow.OnExceptionStepsProperty[] | cdktn.IResolvable) {
    this._onExceptionSteps.internalValue = value;
  }
  public resetOnExceptionSteps() {
    this._onExceptionSteps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExceptionStepsInput() {
    return this._onExceptionSteps.internalValue;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new AwsWorkflow.StepsPropertyList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: AwsWorkflow.StepsProperty[] | cdktn.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      on_exception_steps: cdktn.listMapper(awsWorkflowOnExceptionStepsPropertyToTerraform, true)(this._onExceptionSteps.internalValue),
      steps: cdktn.listMapper(awsWorkflowStepsPropertyToTerraform, true)(this._steps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      on_exception_steps: {
        value: cdktn.listMapperHcl(awsWorkflowOnExceptionStepsPropertyToHclTerraform, true)(this._onExceptionSteps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsWorkflow.OnExceptionStepsPropertyList",
      },
      steps: {
        value: cdktn.listMapperHcl(awsWorkflowStepsPropertyToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsWorkflow.StepsPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_location: awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct!.efsFileLocation),
    s3_file_location: awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct!.s3FileLocation),
  }
}


export function awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_location: {
      value: awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyList",
    },
    s3_file_location: {
      value: awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsCopyStepDetailsPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    destination_file_location: awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyToTerraform(struct!.destinationFileLocation),
  }
}


export function awsWorkflowOnExceptionStepsCopyStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsCopyStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsCopyStepDetailsProperty): any {
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
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_file_location: {
      value: awsWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsCustomStepDetailsPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsCustomStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsCustomStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    target: cdktn.stringToTerraform(struct!.target),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function awsWorkflowOnExceptionStepsCustomStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsCustomStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsCustomStepDetailsProperty): any {
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
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_location: awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct!.efsFileLocation),
    s3_file_location: awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct!.s3FileLocation),
  }
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_location: {
      value: awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyList",
    },
    s3_file_location: {
      value: awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    type: cdktn.stringToTerraform(struct!.type),
    destination_file_location: awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyToTerraform(struct!.destinationFileLocation),
  }
}


export function awsWorkflowOnExceptionStepsDecryptStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsDecryptStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsDecryptStepDetailsProperty): any {
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
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_file_location: {
      value: awsWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsDeleteStepDetailsPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsDeleteStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsDeleteStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function awsWorkflowOnExceptionStepsDeleteStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsDeleteStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsDeleteStepDetailsProperty): any {
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
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsTagStepDetailsTagsPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsTagStepDetailsTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsWorkflowOnExceptionStepsTagStepDetailsTagsPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsTagStepDetailsTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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


export function awsWorkflowOnExceptionStepsTagStepDetailsPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsTagStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsTagStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    tags: cdktn.listMapper(awsWorkflowOnExceptionStepsTagStepDetailsTagsPropertyToTerraform, true)(struct!.tags),
  }
}


export function awsWorkflowOnExceptionStepsTagStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsTagStepDetailsPropertyOutputReference | AwsWorkflow.OnExceptionStepsTagStepDetailsProperty): any {
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
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(awsWorkflowOnExceptionStepsTagStepDetailsTagsPropertyToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsTagStepDetailsTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowOnExceptionStepsPropertyToTerraform(struct?: AwsWorkflow.OnExceptionStepsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    copy_step_details: awsWorkflowOnExceptionStepsCopyStepDetailsPropertyToTerraform(struct!.copyStepDetails),
    custom_step_details: awsWorkflowOnExceptionStepsCustomStepDetailsPropertyToTerraform(struct!.customStepDetails),
    decrypt_step_details: awsWorkflowOnExceptionStepsDecryptStepDetailsPropertyToTerraform(struct!.decryptStepDetails),
    delete_step_details: awsWorkflowOnExceptionStepsDeleteStepDetailsPropertyToTerraform(struct!.deleteStepDetails),
    tag_step_details: awsWorkflowOnExceptionStepsTagStepDetailsPropertyToTerraform(struct!.tagStepDetails),
  }
}


export function awsWorkflowOnExceptionStepsPropertyToHclTerraform(struct?: AwsWorkflow.OnExceptionStepsProperty | cdktn.IResolvable): any {
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
    copy_step_details: {
      value: awsWorkflowOnExceptionStepsCopyStepDetailsPropertyToHclTerraform(struct!.copyStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsCopyStepDetailsPropertyList",
    },
    custom_step_details: {
      value: awsWorkflowOnExceptionStepsCustomStepDetailsPropertyToHclTerraform(struct!.customStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsCustomStepDetailsPropertyList",
    },
    decrypt_step_details: {
      value: awsWorkflowOnExceptionStepsDecryptStepDetailsPropertyToHclTerraform(struct!.decryptStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsDecryptStepDetailsPropertyList",
    },
    delete_step_details: {
      value: awsWorkflowOnExceptionStepsDeleteStepDetailsPropertyToHclTerraform(struct!.deleteStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsDeleteStepDetailsPropertyList",
    },
    tag_step_details: {
      value: awsWorkflowOnExceptionStepsTagStepDetailsPropertyToHclTerraform(struct!.tagStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OnExceptionStepsTagStepDetailsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function awsWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_location: awsWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct!.efsFileLocation),
    s3_file_location: awsWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct!.s3FileLocation),
  }
}


export function awsWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_location: {
      value: awsWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "StepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyList",
    },
    s3_file_location: {
      value: awsWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "StepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsCopyStepDetailsPropertyToTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    destination_file_location: awsWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToTerraform(struct!.destinationFileLocation),
  }
}


export function awsWorkflowStepsCopyStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.StepsCopyStepDetailsPropertyOutputReference | AwsWorkflow.StepsCopyStepDetailsProperty): any {
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
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_file_location: {
      value: awsWorkflowStepsCopyStepDetailsDestinationFileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "StepsCopyStepDetailsDestinationFileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsCustomStepDetailsPropertyToTerraform(struct?: AwsWorkflow.StepsCustomStepDetailsPropertyOutputReference | AwsWorkflow.StepsCustomStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    target: cdktn.stringToTerraform(struct!.target),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function awsWorkflowStepsCustomStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.StepsCustomStepDetailsPropertyOutputReference | AwsWorkflow.StepsCustomStepDetailsProperty): any {
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
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_system_id: cdktn.stringToTerraform(struct!.fileSystemId),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function awsWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_system_id: {
      value: cdktn.stringToHclTerraform(struct!.fileSystemId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key: cdktn.stringToTerraform(struct!.key),
  }
}


export function awsWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    efs_file_location: awsWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToTerraform(struct!.efsFileLocation),
    s3_file_location: awsWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToTerraform(struct!.s3FileLocation),
  }
}


export function awsWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToHclTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsDestinationFileLocationProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    efs_file_location: {
      value: awsWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyToHclTerraform(struct!.efsFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyList",
    },
    s3_file_location: {
      value: awsWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyToHclTerraform(struct!.s3FileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "StepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsDecryptStepDetailsPropertyToTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    overwrite_existing: cdktn.stringToTerraform(struct!.overwriteExisting),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    type: cdktn.stringToTerraform(struct!.type),
    destination_file_location: awsWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToTerraform(struct!.destinationFileLocation),
  }
}


export function awsWorkflowStepsDecryptStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.StepsDecryptStepDetailsPropertyOutputReference | AwsWorkflow.StepsDecryptStepDetailsProperty): any {
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
    overwrite_existing: {
      value: cdktn.stringToHclTerraform(struct!.overwriteExisting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_file_location: {
      value: awsWorkflowStepsDecryptStepDetailsDestinationFileLocationPropertyToHclTerraform(struct!.destinationFileLocation),
      isBlock: true,
      type: "list",
      storageClassType: "StepsDecryptStepDetailsDestinationFileLocationPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsDeleteStepDetailsPropertyToTerraform(struct?: AwsWorkflow.StepsDeleteStepDetailsPropertyOutputReference | AwsWorkflow.StepsDeleteStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
  }
}


export function awsWorkflowStepsDeleteStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.StepsDeleteStepDetailsPropertyOutputReference | AwsWorkflow.StepsDeleteStepDetailsProperty): any {
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
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsTagStepDetailsTagsPropertyToTerraform(struct?: AwsWorkflow.StepsTagStepDetailsTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function awsWorkflowStepsTagStepDetailsTagsPropertyToHclTerraform(struct?: AwsWorkflow.StepsTagStepDetailsTagsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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


export function awsWorkflowStepsTagStepDetailsPropertyToTerraform(struct?: AwsWorkflow.StepsTagStepDetailsPropertyOutputReference | AwsWorkflow.StepsTagStepDetailsProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    source_file_location: cdktn.stringToTerraform(struct!.sourceFileLocation),
    tags: cdktn.listMapper(awsWorkflowStepsTagStepDetailsTagsPropertyToTerraform, true)(struct!.tags),
  }
}


export function awsWorkflowStepsTagStepDetailsPropertyToHclTerraform(struct?: AwsWorkflow.StepsTagStepDetailsPropertyOutputReference | AwsWorkflow.StepsTagStepDetailsProperty): any {
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
    source_file_location: {
      value: cdktn.stringToHclTerraform(struct!.sourceFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(awsWorkflowStepsTagStepDetailsTagsPropertyToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "StepsTagStepDetailsTagsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsWorkflowStepsPropertyToTerraform(struct?: AwsWorkflow.StepsProperty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    copy_step_details: awsWorkflowStepsCopyStepDetailsPropertyToTerraform(struct!.copyStepDetails),
    custom_step_details: awsWorkflowStepsCustomStepDetailsPropertyToTerraform(struct!.customStepDetails),
    decrypt_step_details: awsWorkflowStepsDecryptStepDetailsPropertyToTerraform(struct!.decryptStepDetails),
    delete_step_details: awsWorkflowStepsDeleteStepDetailsPropertyToTerraform(struct!.deleteStepDetails),
    tag_step_details: awsWorkflowStepsTagStepDetailsPropertyToTerraform(struct!.tagStepDetails),
  }
}


export function awsWorkflowStepsPropertyToHclTerraform(struct?: AwsWorkflow.StepsProperty | cdktn.IResolvable): any {
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
    copy_step_details: {
      value: awsWorkflowStepsCopyStepDetailsPropertyToHclTerraform(struct!.copyStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StepsCopyStepDetailsPropertyList",
    },
    custom_step_details: {
      value: awsWorkflowStepsCustomStepDetailsPropertyToHclTerraform(struct!.customStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StepsCustomStepDetailsPropertyList",
    },
    decrypt_step_details: {
      value: awsWorkflowStepsDecryptStepDetailsPropertyToHclTerraform(struct!.decryptStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StepsDecryptStepDetailsPropertyList",
    },
    delete_step_details: {
      value: awsWorkflowStepsDeleteStepDetailsPropertyToHclTerraform(struct!.deleteStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StepsDeleteStepDetailsPropertyList",
    },
    tag_step_details: {
      value: awsWorkflowStepsTagStepDetailsPropertyToHclTerraform(struct!.tagStepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "StepsTagStepDetailsPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsWorkflow {
export interface OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#file_system_id AwsWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#path AwsWorkflow#path}
  */
  readonly path?: string;
}
export class OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
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
}
export interface OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#bucket AwsWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#key AwsWorkflow#key}
  */
  readonly key?: string;
}
export class OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface OnExceptionStepsCopyStepDetailsDestinationFileLocationProperty {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#efs_file_location AwsWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#s3_file_location AwsWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty;
}
export class OnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsCopyStepDetailsDestinationFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsCopyStepDetailsDestinationFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: OnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: OnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface OnExceptionStepsCopyStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#overwrite_existing AwsWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#destination_file_location AwsWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: OnExceptionStepsCopyStepDetailsDestinationFileLocationProperty;
}
export class OnExceptionStepsCopyStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsCopyStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsCopyStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new OnExceptionStepsCopyStepDetailsDestinationFileLocationPropertyOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: OnExceptionStepsCopyStepDetailsDestinationFileLocationProperty) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface OnExceptionStepsCustomStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#target AwsWorkflow#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#timeout_seconds AwsWorkflow#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}
export class OnExceptionStepsCustomStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsCustomStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsCustomStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._target = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._target = value.target;
      this._timeoutSeconds = value.timeoutSeconds;
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#file_system_id AwsWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#path AwsWorkflow#path}
  */
  readonly path?: string;
}
export class OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
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
}
export interface OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#bucket AwsWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#key AwsWorkflow#key}
  */
  readonly key?: string;
}
export class OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface OnExceptionStepsDecryptStepDetailsDestinationFileLocationProperty {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#efs_file_location AwsWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#s3_file_location AwsWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty;
}
export class OnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsDecryptStepDetailsDestinationFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface OnExceptionStepsDecryptStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#overwrite_existing AwsWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#type AwsWorkflow#type}
  */
  readonly type: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#destination_file_location AwsWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: OnExceptionStepsDecryptStepDetailsDestinationFileLocationProperty;
}
export class OnExceptionStepsDecryptStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsDecryptStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsDecryptStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._type = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._type = value.type;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
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

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new OnExceptionStepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: OnExceptionStepsDecryptStepDetailsDestinationFileLocationProperty) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface OnExceptionStepsDeleteStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}
export class OnExceptionStepsDeleteStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsDeleteStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsDeleteStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface OnExceptionStepsTagStepDetailsTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#key AwsWorkflow#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#value AwsWorkflow#value}
  */
  readonly value: string;
}
export class OnExceptionStepsTagStepDetailsTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OnExceptionStepsTagStepDetailsTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsTagStepDetailsTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class OnExceptionStepsTagStepDetailsTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : OnExceptionStepsTagStepDetailsTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): OnExceptionStepsTagStepDetailsTagsPropertyOutputReference {
    return new OnExceptionStepsTagStepDetailsTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OnExceptionStepsTagStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#tags AwsWorkflow#tags}
  */
  readonly tags?: OnExceptionStepsTagStepDetailsTagsProperty[] | cdktn.IResolvable;
}
export class OnExceptionStepsTagStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OnExceptionStepsTagStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsTagStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._tags.internalValue = value.tags;
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new OnExceptionStepsTagStepDetailsTagsPropertyList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: OnExceptionStepsTagStepDetailsTagsProperty[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface OnExceptionStepsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#type AwsWorkflow#type}
  */
  readonly type: string;
  /**
  * copy_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#copy_step_details AwsWorkflow#copy_step_details}
  */
  readonly copyStepDetails?: OnExceptionStepsCopyStepDetailsProperty;
  /**
  * custom_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#custom_step_details AwsWorkflow#custom_step_details}
  */
  readonly customStepDetails?: OnExceptionStepsCustomStepDetailsProperty;
  /**
  * decrypt_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#decrypt_step_details AwsWorkflow#decrypt_step_details}
  */
  readonly decryptStepDetails?: OnExceptionStepsDecryptStepDetailsProperty;
  /**
  * delete_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#delete_step_details AwsWorkflow#delete_step_details}
  */
  readonly deleteStepDetails?: OnExceptionStepsDeleteStepDetailsProperty;
  /**
  * tag_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#tag_step_details AwsWorkflow#tag_step_details}
  */
  readonly tagStepDetails?: OnExceptionStepsTagStepDetailsProperty;
}
export class OnExceptionStepsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): OnExceptionStepsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._copyStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
    }
    if (this._customStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
    }
    if (this._decryptStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
    }
    if (this._deleteStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
    }
    if (this._tagStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnExceptionStepsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._copyStepDetails.internalValue = undefined;
      this._customStepDetails.internalValue = undefined;
      this._decryptStepDetails.internalValue = undefined;
      this._deleteStepDetails.internalValue = undefined;
      this._tagStepDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._copyStepDetails.internalValue = value.copyStepDetails;
      this._customStepDetails.internalValue = value.customStepDetails;
      this._decryptStepDetails.internalValue = value.decryptStepDetails;
      this._deleteStepDetails.internalValue = value.deleteStepDetails;
      this._tagStepDetails.internalValue = value.tagStepDetails;
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

  // copy_step_details - computed: false, optional: true, required: false
  private _copyStepDetails = new OnExceptionStepsCopyStepDetailsPropertyOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }
  public putCopyStepDetails(value: OnExceptionStepsCopyStepDetailsProperty) {
    this._copyStepDetails.internalValue = value;
  }
  public resetCopyStepDetails() {
    this._copyStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStepDetailsInput() {
    return this._copyStepDetails.internalValue;
  }

  // custom_step_details - computed: false, optional: true, required: false
  private _customStepDetails = new OnExceptionStepsCustomStepDetailsPropertyOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }
  public putCustomStepDetails(value: OnExceptionStepsCustomStepDetailsProperty) {
    this._customStepDetails.internalValue = value;
  }
  public resetCustomStepDetails() {
    this._customStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStepDetailsInput() {
    return this._customStepDetails.internalValue;
  }

  // decrypt_step_details - computed: false, optional: true, required: false
  private _decryptStepDetails = new OnExceptionStepsDecryptStepDetailsPropertyOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }
  public putDecryptStepDetails(value: OnExceptionStepsDecryptStepDetailsProperty) {
    this._decryptStepDetails.internalValue = value;
  }
  public resetDecryptStepDetails() {
    this._decryptStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptStepDetailsInput() {
    return this._decryptStepDetails.internalValue;
  }

  // delete_step_details - computed: false, optional: true, required: false
  private _deleteStepDetails = new OnExceptionStepsDeleteStepDetailsPropertyOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }
  public putDeleteStepDetails(value: OnExceptionStepsDeleteStepDetailsProperty) {
    this._deleteStepDetails.internalValue = value;
  }
  public resetDeleteStepDetails() {
    this._deleteStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteStepDetailsInput() {
    return this._deleteStepDetails.internalValue;
  }

  // tag_step_details - computed: false, optional: true, required: false
  private _tagStepDetails = new OnExceptionStepsTagStepDetailsPropertyOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }
  public putTagStepDetails(value: OnExceptionStepsTagStepDetailsProperty) {
    this._tagStepDetails.internalValue = value;
  }
  public resetTagStepDetails() {
    this._tagStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStepDetailsInput() {
    return this._tagStepDetails.internalValue;
  }
}

export class OnExceptionStepsPropertyList extends cdktn.ComplexList {
  public internalValue? : OnExceptionStepsProperty[] | cdktn.IResolvable

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
  public get(index: number): OnExceptionStepsPropertyOutputReference {
    return new OnExceptionStepsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#file_system_id AwsWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#path AwsWorkflow#path}
  */
  readonly path?: string;
}
export class StepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
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
}
export interface StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#bucket AwsWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#key AwsWorkflow#key}
  */
  readonly key?: string;
}
export class StepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface StepsCopyStepDetailsDestinationFileLocationProperty {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#efs_file_location AwsWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: StepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#s3_file_location AwsWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty;
}
export class StepsCopyStepDetailsDestinationFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsCopyStepDetailsDestinationFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsCopyStepDetailsDestinationFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new StepsCopyStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: StepsCopyStepDetailsDestinationFileLocationEfsFileLocationProperty) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new StepsCopyStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: StepsCopyStepDetailsDestinationFileLocationS3FileLocationProperty) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface StepsCopyStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#overwrite_existing AwsWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#destination_file_location AwsWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: StepsCopyStepDetailsDestinationFileLocationProperty;
}
export class StepsCopyStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsCopyStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsCopyStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new StepsCopyStepDetailsDestinationFileLocationPropertyOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: StepsCopyStepDetailsDestinationFileLocationProperty) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface StepsCustomStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#target AwsWorkflow#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#timeout_seconds AwsWorkflow#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}
export class StepsCustomStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsCustomStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsCustomStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._target = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._target = value.target;
      this._timeoutSeconds = value.timeoutSeconds;
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#file_system_id AwsWorkflow#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#path AwsWorkflow#path}
  */
  readonly path?: string;
}
export class StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
      this._path = value.path;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // path - computed: false, optional: true, required: false
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
}
export interface StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#bucket AwsWorkflow#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#key AwsWorkflow#key}
  */
  readonly key?: string;
}
export class StepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._key = value.key;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface StepsDecryptStepDetailsDestinationFileLocationProperty {
  /**
  * efs_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#efs_file_location AwsWorkflow#efs_file_location}
  */
  readonly efsFileLocation?: StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty;
  /**
  * s3_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#s3_file_location AwsWorkflow#s3_file_location}
  */
  readonly s3FileLocation?: StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty;
}
export class StepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsDecryptStepDetailsDestinationFileLocationProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileLocation = this._efsFileLocation?.internalValue;
    }
    if (this._s3FileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3FileLocation = this._s3FileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsDecryptStepDetailsDestinationFileLocationProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._efsFileLocation.internalValue = undefined;
      this._s3FileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._efsFileLocation.internalValue = value.efsFileLocation;
      this._s3FileLocation.internalValue = value.s3FileLocation;
    }
  }

  // efs_file_location - computed: false, optional: true, required: false
  private _efsFileLocation = new StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationPropertyOutputReference(this, "efs_file_location");
  public get efsFileLocation() {
    return this._efsFileLocation;
  }
  public putEfsFileLocation(value: StepsDecryptStepDetailsDestinationFileLocationEfsFileLocationProperty) {
    this._efsFileLocation.internalValue = value;
  }
  public resetEfsFileLocation() {
    this._efsFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileLocationInput() {
    return this._efsFileLocation.internalValue;
  }

  // s3_file_location - computed: false, optional: true, required: false
  private _s3FileLocation = new StepsDecryptStepDetailsDestinationFileLocationS3FileLocationPropertyOutputReference(this, "s3_file_location");
  public get s3FileLocation() {
    return this._s3FileLocation;
  }
  public putS3FileLocation(value: StepsDecryptStepDetailsDestinationFileLocationS3FileLocationProperty) {
    this._s3FileLocation.internalValue = value;
  }
  public resetS3FileLocation() {
    this._s3FileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3FileLocationInput() {
    return this._s3FileLocation.internalValue;
  }
}
export interface StepsDecryptStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#overwrite_existing AwsWorkflow#overwrite_existing}
  */
  readonly overwriteExisting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#type AwsWorkflow#type}
  */
  readonly type: string;
  /**
  * destination_file_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#destination_file_location AwsWorkflow#destination_file_location}
  */
  readonly destinationFileLocation?: StepsDecryptStepDetailsDestinationFileLocationProperty;
}
export class StepsDecryptStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsDecryptStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwriteExisting !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExisting = this._overwriteExisting;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._destinationFileLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFileLocation = this._destinationFileLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsDecryptStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._overwriteExisting = undefined;
      this._sourceFileLocation = undefined;
      this._type = undefined;
      this._destinationFileLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._overwriteExisting = value.overwriteExisting;
      this._sourceFileLocation = value.sourceFileLocation;
      this._type = value.type;
      this._destinationFileLocation.internalValue = value.destinationFileLocation;
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

  // overwrite_existing - computed: false, optional: true, required: false
  private _overwriteExisting?: string; 
  public get overwriteExisting() {
    return this.getStringAttribute('overwrite_existing');
  }
  public set overwriteExisting(value: string) {
    this._overwriteExisting = value;
  }
  public resetOverwriteExisting() {
    this._overwriteExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingInput() {
    return this._overwriteExisting;
  }

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
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

  // destination_file_location - computed: false, optional: true, required: false
  private _destinationFileLocation = new StepsDecryptStepDetailsDestinationFileLocationPropertyOutputReference(this, "destination_file_location");
  public get destinationFileLocation() {
    return this._destinationFileLocation;
  }
  public putDestinationFileLocation(value: StepsDecryptStepDetailsDestinationFileLocationProperty) {
    this._destinationFileLocation.internalValue = value;
  }
  public resetDestinationFileLocation() {
    this._destinationFileLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFileLocationInput() {
    return this._destinationFileLocation.internalValue;
  }
}
export interface StepsDeleteStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
}
export class StepsDeleteStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsDeleteStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsDeleteStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }
}
export interface StepsTagStepDetailsTagsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#key AwsWorkflow#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#value AwsWorkflow#value}
  */
  readonly value: string;
}
export class StepsTagStepDetailsTagsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StepsTagStepDetailsTagsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsTagStepDetailsTagsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class StepsTagStepDetailsTagsPropertyList extends cdktn.ComplexList {
  public internalValue? : StepsTagStepDetailsTagsProperty[] | cdktn.IResolvable

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
  public get(index: number): StepsTagStepDetailsTagsPropertyOutputReference {
    return new StepsTagStepDetailsTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StepsTagStepDetailsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#name AwsWorkflow#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#source_file_location AwsWorkflow#source_file_location}
  */
  readonly sourceFileLocation?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#tags AwsWorkflow#tags}
  */
  readonly tags?: StepsTagStepDetailsTagsProperty[] | cdktn.IResolvable;
}
export class StepsTagStepDetailsPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StepsTagStepDetailsProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFileLocation = this._sourceFileLocation;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsTagStepDetailsProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._sourceFileLocation = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._sourceFileLocation = value.sourceFileLocation;
      this._tags.internalValue = value.tags;
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

  // source_file_location - computed: false, optional: true, required: false
  private _sourceFileLocation?: string; 
  public get sourceFileLocation() {
    return this.getStringAttribute('source_file_location');
  }
  public set sourceFileLocation(value: string) {
    this._sourceFileLocation = value;
  }
  public resetSourceFileLocation() {
    this._sourceFileLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileLocationInput() {
    return this._sourceFileLocation;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new StepsTagStepDetailsTagsPropertyList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: StepsTagStepDetailsTagsProperty[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface StepsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#type AwsWorkflow#type}
  */
  readonly type: string;
  /**
  * copy_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#copy_step_details AwsWorkflow#copy_step_details}
  */
  readonly copyStepDetails?: StepsCopyStepDetailsProperty;
  /**
  * custom_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#custom_step_details AwsWorkflow#custom_step_details}
  */
  readonly customStepDetails?: StepsCustomStepDetailsProperty;
  /**
  * decrypt_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#decrypt_step_details AwsWorkflow#decrypt_step_details}
  */
  readonly decryptStepDetails?: StepsDecryptStepDetailsProperty;
  /**
  * delete_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#delete_step_details AwsWorkflow#delete_step_details}
  */
  readonly deleteStepDetails?: StepsDeleteStepDetailsProperty;
  /**
  * tag_step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/transfer_workflow#tag_step_details AwsWorkflow#tag_step_details}
  */
  readonly tagStepDetails?: StepsTagStepDetailsProperty;
}
export class StepsPropertyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StepsProperty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._copyStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyStepDetails = this._copyStepDetails?.internalValue;
    }
    if (this._customStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStepDetails = this._customStepDetails?.internalValue;
    }
    if (this._decryptStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptStepDetails = this._decryptStepDetails?.internalValue;
    }
    if (this._deleteStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteStepDetails = this._deleteStepDetails?.internalValue;
    }
    if (this._tagStepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagStepDetails = this._tagStepDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StepsProperty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._copyStepDetails.internalValue = undefined;
      this._customStepDetails.internalValue = undefined;
      this._decryptStepDetails.internalValue = undefined;
      this._deleteStepDetails.internalValue = undefined;
      this._tagStepDetails.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._copyStepDetails.internalValue = value.copyStepDetails;
      this._customStepDetails.internalValue = value.customStepDetails;
      this._decryptStepDetails.internalValue = value.decryptStepDetails;
      this._deleteStepDetails.internalValue = value.deleteStepDetails;
      this._tagStepDetails.internalValue = value.tagStepDetails;
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

  // copy_step_details - computed: false, optional: true, required: false
  private _copyStepDetails = new StepsCopyStepDetailsPropertyOutputReference(this, "copy_step_details");
  public get copyStepDetails() {
    return this._copyStepDetails;
  }
  public putCopyStepDetails(value: StepsCopyStepDetailsProperty) {
    this._copyStepDetails.internalValue = value;
  }
  public resetCopyStepDetails() {
    this._copyStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyStepDetailsInput() {
    return this._copyStepDetails.internalValue;
  }

  // custom_step_details - computed: false, optional: true, required: false
  private _customStepDetails = new StepsCustomStepDetailsPropertyOutputReference(this, "custom_step_details");
  public get customStepDetails() {
    return this._customStepDetails;
  }
  public putCustomStepDetails(value: StepsCustomStepDetailsProperty) {
    this._customStepDetails.internalValue = value;
  }
  public resetCustomStepDetails() {
    this._customStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStepDetailsInput() {
    return this._customStepDetails.internalValue;
  }

  // decrypt_step_details - computed: false, optional: true, required: false
  private _decryptStepDetails = new StepsDecryptStepDetailsPropertyOutputReference(this, "decrypt_step_details");
  public get decryptStepDetails() {
    return this._decryptStepDetails;
  }
  public putDecryptStepDetails(value: StepsDecryptStepDetailsProperty) {
    this._decryptStepDetails.internalValue = value;
  }
  public resetDecryptStepDetails() {
    this._decryptStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptStepDetailsInput() {
    return this._decryptStepDetails.internalValue;
  }

  // delete_step_details - computed: false, optional: true, required: false
  private _deleteStepDetails = new StepsDeleteStepDetailsPropertyOutputReference(this, "delete_step_details");
  public get deleteStepDetails() {
    return this._deleteStepDetails;
  }
  public putDeleteStepDetails(value: StepsDeleteStepDetailsProperty) {
    this._deleteStepDetails.internalValue = value;
  }
  public resetDeleteStepDetails() {
    this._deleteStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteStepDetailsInput() {
    return this._deleteStepDetails.internalValue;
  }

  // tag_step_details - computed: false, optional: true, required: false
  private _tagStepDetails = new StepsTagStepDetailsPropertyOutputReference(this, "tag_step_details");
  public get tagStepDetails() {
    return this._tagStepDetails;
  }
  public putTagStepDetails(value: StepsTagStepDetailsProperty) {
    this._tagStepDetails.internalValue = value;
  }
  public resetTagStepDetails() {
    this._tagStepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStepDetailsInput() {
    return this._tagStepDetails.internalValue;
  }
}

export class StepsPropertyList extends cdktn.ComplexList {
  public internalValue? : StepsProperty[] | cdktn.IResolvable

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
  public get(index: number): StepsPropertyOutputReference {
    return new StepsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
}
