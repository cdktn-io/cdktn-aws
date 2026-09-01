// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function
// generated from terraform resource schema — do not edit by hand

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface AwsLambdaFunctionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#architectures AwsLambdaFunction#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#code_sha256 AwsLambdaFunction#code_sha256}
  */
  readonly codeSha256?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#code_signing_config_arn AwsLambdaFunction#code_signing_config_arn}
  */
  readonly codeSigningConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#description AwsLambdaFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#filename AwsLambdaFunction#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#function_name AwsLambdaFunction#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#handler AwsLambdaFunction#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#id AwsLambdaFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#image_uri AwsLambdaFunction#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#kms_key_arn AwsLambdaFunction#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#layers AwsLambdaFunction#layers}
  */
  readonly layers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#memory_size AwsLambdaFunction#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#package_type AwsLambdaFunction#package_type}
  */
  readonly packageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#publish AwsLambdaFunction#publish}
  */
  readonly publish?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#publish_to AwsLambdaFunction#publish_to}
  */
  readonly publishTo?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#region AwsLambdaFunction#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#replace_security_groups_on_destroy AwsLambdaFunction#replace_security_groups_on_destroy}
  */
  readonly replaceSecurityGroupsOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#replacement_security_group_ids AwsLambdaFunction#replacement_security_group_ids}
  */
  readonly replacementSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#reserved_concurrent_executions AwsLambdaFunction#reserved_concurrent_executions}
  */
  readonly reservedConcurrentExecutions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#role AwsLambdaFunction#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#runtime AwsLambdaFunction#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#s3_bucket AwsLambdaFunction#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#s3_key AwsLambdaFunction#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#s3_object_version AwsLambdaFunction#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#skip_destroy AwsLambdaFunction#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#source_code_hash AwsLambdaFunction#source_code_hash}
  */
  readonly sourceCodeHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#source_kms_key_arn AwsLambdaFunction#source_kms_key_arn}
  */
  readonly sourceKmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#tags AwsLambdaFunction#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#tags_all AwsLambdaFunction#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#timeout AwsLambdaFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#use_resource_timeout_for_propagation AwsLambdaFunction#use_resource_timeout_for_propagation}
  */
  readonly useResourceTimeoutForPropagation?: boolean | cdktn.IResolvable;
  /**
  * capacity_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#capacity_provider_config AwsLambdaFunction#capacity_provider_config}
  */
  readonly capacityProviderConfig?: AwsLambdaFunction.CapacityProviderConfigProperty;
  /**
  * dead_letter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#dead_letter_config AwsLambdaFunction#dead_letter_config}
  */
  readonly deadLetterConfig?: AwsLambdaFunction.DeadLetterConfigProperty;
  /**
  * durable_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#durable_config AwsLambdaFunction#durable_config}
  */
  readonly durableConfig?: AwsLambdaFunction.DurableConfigProperty;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#environment AwsLambdaFunction#environment}
  */
  readonly environment?: AwsLambdaFunction.EnvironmentProperty;
  /**
  * ephemeral_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#ephemeral_storage AwsLambdaFunction#ephemeral_storage}
  */
  readonly ephemeralStorage?: AwsLambdaFunction.EphemeralStorageProperty;
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#file_system_config AwsLambdaFunction#file_system_config}
  */
  readonly fileSystemConfig?: AwsLambdaFunction.FileSystemConfigProperty;
  /**
  * image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#image_config AwsLambdaFunction#image_config}
  */
  readonly imageConfig?: AwsLambdaFunction.ImageConfigProperty;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#logging_config AwsLambdaFunction#logging_config}
  */
  readonly loggingConfig?: AwsLambdaFunction.LoggingConfigProperty;
  /**
  * snap_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#snap_start AwsLambdaFunction#snap_start}
  */
  readonly snapStart?: AwsLambdaFunction.SnapStartProperty;
  /**
  * tenancy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#tenancy_config AwsLambdaFunction#tenancy_config}
  */
  readonly tenancyConfig?: AwsLambdaFunction.TenancyConfigProperty;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#timeouts AwsLambdaFunction#timeouts}
  */
  readonly timeouts?: AwsLambdaFunction.TimeoutsProperty;
  /**
  * tracing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#tracing_config AwsLambdaFunction#tracing_config}
  */
  readonly tracingConfig?: AwsLambdaFunction.TracingConfigProperty;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#vpc_config AwsLambdaFunction#vpc_config}
  */
  readonly vpcConfig?: AwsLambdaFunction.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function aws_lambda_function}
*/
export class AwsLambdaFunction extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsLambdaFunction resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLambdaFunction to import
  * @param importFromId The id of the existing AwsLambdaFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLambdaFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function aws_lambda_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLambdaFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLambdaFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function',
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
    this._architectures = config.architectures;
    this._codeSha256 = config.codeSha256;
    this._codeSigningConfigArn = config.codeSigningConfigArn;
    this._description = config.description;
    this._filename = config.filename;
    this._functionName = config.functionName;
    this._handler = config.handler;
    this._id = config.id;
    this._imageUri = config.imageUri;
    this._kmsKeyArn = config.kmsKeyArn;
    this._layers = config.layers;
    this._memorySize = config.memorySize;
    this._packageType = config.packageType;
    this._publish = config.publish;
    this._publishTo = config.publishTo;
    this._region = config.region;
    this._replaceSecurityGroupsOnDestroy = config.replaceSecurityGroupsOnDestroy;
    this._replacementSecurityGroupIds = config.replacementSecurityGroupIds;
    this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
    this._role = config.role;
    this._runtime = config.runtime;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3ObjectVersion = config.s3ObjectVersion;
    this._skipDestroy = config.skipDestroy;
    this._sourceCodeHash = config.sourceCodeHash;
    this._sourceKmsKeyArn = config.sourceKmsKeyArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._useResourceTimeoutForPropagation = config.useResourceTimeoutForPropagation;
    this._capacityProviderConfig.internalValue = config.capacityProviderConfig;
    this._deadLetterConfig.internalValue = config.deadLetterConfig;
    this._durableConfig.internalValue = config.durableConfig;
    this._environment.internalValue = config.environment;
    this._ephemeralStorage.internalValue = config.ephemeralStorage;
    this._fileSystemConfig.internalValue = config.fileSystemConfig;
    this._imageConfig.internalValue = config.imageConfig;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._snapStart.internalValue = config.snapStart;
    this._tenancyConfig.internalValue = config.tenancyConfig;
    this._timeouts.internalValue = config.timeouts;
    this._tracingConfig.internalValue = config.tracingConfig;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architectures - computed: true, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_sha256 - computed: true, optional: true, required: false
  private _codeSha256?: string; 
  public get codeSha256() {
    return this.getStringAttribute('code_sha256');
  }
  public set codeSha256(value: string) {
    this._codeSha256 = value;
  }
  public resetCodeSha256() {
    this._codeSha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSha256Input() {
    return this._codeSha256;
  }

  // code_signing_config_arn - computed: false, optional: true, required: false
  private _codeSigningConfigArn?: string; 
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }
  public set codeSigningConfigArn(value: string) {
    this._codeSigningConfigArn = value;
  }
  public resetCodeSigningConfigArn() {
    this._codeSigningConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningConfigArnInput() {
    return this._codeSigningConfigArn;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // invoke_arn - computed: true, optional: false, required: false
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // layers - computed: false, optional: true, required: false
  private _layers?: string[]; 
  public get layers() {
    return this.getListAttribute('layers');
  }
  public set layers(value: string[]) {
    this._layers = value;
  }
  public resetLayers() {
    this._layers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktn.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktn.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // publish_to - computed: false, optional: true, required: false
  private _publishTo?: string; 
  public get publishTo() {
    return this.getStringAttribute('publish_to');
  }
  public set publishTo(value: string) {
    this._publishTo = value;
  }
  public resetPublishTo() {
    this._publishTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishToInput() {
    return this._publishTo;
  }

  // qualified_arn - computed: true, optional: false, required: false
  public get qualifiedArn() {
    return this.getStringAttribute('qualified_arn');
  }

  // qualified_invoke_arn - computed: true, optional: false, required: false
  public get qualifiedInvokeArn() {
    return this.getStringAttribute('qualified_invoke_arn');
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

  // replace_security_groups_on_destroy - computed: false, optional: true, required: false
  private _replaceSecurityGroupsOnDestroy?: boolean | cdktn.IResolvable; 
  public get replaceSecurityGroupsOnDestroy() {
    return this.getBooleanAttribute('replace_security_groups_on_destroy');
  }
  public set replaceSecurityGroupsOnDestroy(value: boolean | cdktn.IResolvable) {
    this._replaceSecurityGroupsOnDestroy = value;
  }
  public resetReplaceSecurityGroupsOnDestroy() {
    this._replaceSecurityGroupsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceSecurityGroupsOnDestroyInput() {
    return this._replaceSecurityGroupsOnDestroy;
  }

  // replacement_security_group_ids - computed: false, optional: true, required: false
  private _replacementSecurityGroupIds?: string[]; 
  public get replacementSecurityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('replacement_security_group_ids'));
  }
  public set replacementSecurityGroupIds(value: string[]) {
    this._replacementSecurityGroupIds = value;
  }
  public resetReplacementSecurityGroupIds() {
    this._replacementSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementSecurityGroupIdsInput() {
    return this._replacementSecurityGroupIds;
  }

  // reserved_concurrent_executions - computed: false, optional: true, required: false
  private _reservedConcurrentExecutions?: number; 
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }
  public set reservedConcurrentExecutions(value: number) {
    this._reservedConcurrentExecutions = value;
  }
  public resetReservedConcurrentExecutions() {
    this._reservedConcurrentExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedConcurrentExecutionsInput() {
    return this._reservedConcurrentExecutions;
  }

  // response_streaming_invoke_arn - computed: true, optional: false, required: false
  public get responseStreamingInvokeArn() {
    return this.getStringAttribute('response_streaming_invoke_arn');
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string; 
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion;
  }

  // signing_job_arn - computed: true, optional: false, required: false
  public get signingJobArn() {
    return this.getStringAttribute('signing_job_arn');
  }

  // signing_profile_version_arn - computed: true, optional: false, required: false
  public get signingProfileVersionArn() {
    return this.getStringAttribute('signing_profile_version_arn');
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktn.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktn.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
  }

  // source_code_hash - computed: true, optional: true, required: false
  private _sourceCodeHash?: string; 
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string) {
    this._sourceCodeHash = value;
  }
  public resetSourceCodeHash() {
    this._sourceCodeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeHashInput() {
    return this._sourceCodeHash;
  }

  // source_code_size - computed: true, optional: false, required: false
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // source_kms_key_arn - computed: false, optional: true, required: false
  private _sourceKmsKeyArn?: string; 
  public get sourceKmsKeyArn() {
    return this.getStringAttribute('source_kms_key_arn');
  }
  public set sourceKmsKeyArn(value: string) {
    this._sourceKmsKeyArn = value;
  }
  public resetSourceKmsKeyArn() {
    this._sourceKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKmsKeyArnInput() {
    return this._sourceKmsKeyArn;
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

  // timeout - computed: false, optional: true, required: false
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

  // use_resource_timeout_for_propagation - computed: false, optional: true, required: false
  private _useResourceTimeoutForPropagation?: boolean | cdktn.IResolvable; 
  public get useResourceTimeoutForPropagation() {
    return this.getBooleanAttribute('use_resource_timeout_for_propagation');
  }
  public set useResourceTimeoutForPropagation(value: boolean | cdktn.IResolvable) {
    this._useResourceTimeoutForPropagation = value;
  }
  public resetUseResourceTimeoutForPropagation() {
    this._useResourceTimeoutForPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResourceTimeoutForPropagationInput() {
    return this._useResourceTimeoutForPropagation;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // capacity_provider_config - computed: false, optional: true, required: false
  private _capacityProviderConfig = new AwsLambdaFunction.CapacityProviderConfigPropertyOutputReference(this, "capacity_provider_config");
  public get capacityProviderConfig() {
    return this._capacityProviderConfig;
  }
  public putCapacityProviderConfig(value: AwsLambdaFunction.CapacityProviderConfigProperty) {
    this._capacityProviderConfig.internalValue = value;
  }
  public resetCapacityProviderConfig() {
    this._capacityProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderConfigInput() {
    return this._capacityProviderConfig.internalValue;
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new AwsLambdaFunction.DeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: AwsLambdaFunction.DeadLetterConfigProperty) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // durable_config - computed: false, optional: true, required: false
  private _durableConfig = new AwsLambdaFunction.DurableConfigPropertyOutputReference(this, "durable_config");
  public get durableConfig() {
    return this._durableConfig;
  }
  public putDurableConfig(value: AwsLambdaFunction.DurableConfigProperty) {
    this._durableConfig.internalValue = value;
  }
  public resetDurableConfig() {
    this._durableConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durableConfigInput() {
    return this._durableConfig.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new AwsLambdaFunction.EnvironmentPropertyOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: AwsLambdaFunction.EnvironmentProperty) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new AwsLambdaFunction.EphemeralStoragePropertyOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: AwsLambdaFunction.EphemeralStorageProperty) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new AwsLambdaFunction.FileSystemConfigPropertyOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: AwsLambdaFunction.FileSystemConfigProperty) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new AwsLambdaFunction.ImageConfigPropertyOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: AwsLambdaFunction.ImageConfigProperty) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new AwsLambdaFunction.LoggingConfigPropertyOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: AwsLambdaFunction.LoggingConfigProperty) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // snap_start - computed: false, optional: true, required: false
  private _snapStart = new AwsLambdaFunction.SnapStartPropertyOutputReference(this, "snap_start");
  public get snapStart() {
    return this._snapStart;
  }
  public putSnapStart(value: AwsLambdaFunction.SnapStartProperty) {
    this._snapStart.internalValue = value;
  }
  public resetSnapStart() {
    this._snapStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapStartInput() {
    return this._snapStart.internalValue;
  }

  // tenancy_config - computed: false, optional: true, required: false
  private _tenancyConfig = new AwsLambdaFunction.TenancyConfigPropertyOutputReference(this, "tenancy_config");
  public get tenancyConfig() {
    return this._tenancyConfig;
  }
  public putTenancyConfig(value: AwsLambdaFunction.TenancyConfigProperty) {
    this._tenancyConfig.internalValue = value;
  }
  public resetTenancyConfig() {
    this._tenancyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyConfigInput() {
    return this._tenancyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsLambdaFunction.TimeoutsPropertyOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsLambdaFunction.TimeoutsProperty) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig = new AwsLambdaFunction.TracingConfigPropertyOutputReference(this, "tracing_config");
  public get tracingConfig() {
    return this._tracingConfig;
  }
  public putTracingConfig(value: AwsLambdaFunction.TracingConfigProperty) {
    this._tracingConfig.internalValue = value;
  }
  public resetTracingConfig() {
    this._tracingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new AwsLambdaFunction.VpcConfigPropertyOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: AwsLambdaFunction.VpcConfigProperty) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architectures: cdktn.listMapper(cdktn.stringToTerraform, false)(this._architectures),
      code_sha256: cdktn.stringToTerraform(this._codeSha256),
      code_signing_config_arn: cdktn.stringToTerraform(this._codeSigningConfigArn),
      description: cdktn.stringToTerraform(this._description),
      filename: cdktn.stringToTerraform(this._filename),
      function_name: cdktn.stringToTerraform(this._functionName),
      handler: cdktn.stringToTerraform(this._handler),
      id: cdktn.stringToTerraform(this._id),
      image_uri: cdktn.stringToTerraform(this._imageUri),
      kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
      layers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._layers),
      memory_size: cdktn.numberToTerraform(this._memorySize),
      package_type: cdktn.stringToTerraform(this._packageType),
      publish: cdktn.booleanToTerraform(this._publish),
      publish_to: cdktn.stringToTerraform(this._publishTo),
      region: cdktn.stringToTerraform(this._region),
      replace_security_groups_on_destroy: cdktn.booleanToTerraform(this._replaceSecurityGroupsOnDestroy),
      replacement_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._replacementSecurityGroupIds),
      reserved_concurrent_executions: cdktn.numberToTerraform(this._reservedConcurrentExecutions),
      role: cdktn.stringToTerraform(this._role),
      runtime: cdktn.stringToTerraform(this._runtime),
      s3_bucket: cdktn.stringToTerraform(this._s3Bucket),
      s3_key: cdktn.stringToTerraform(this._s3Key),
      s3_object_version: cdktn.stringToTerraform(this._s3ObjectVersion),
      skip_destroy: cdktn.booleanToTerraform(this._skipDestroy),
      source_code_hash: cdktn.stringToTerraform(this._sourceCodeHash),
      source_kms_key_arn: cdktn.stringToTerraform(this._sourceKmsKeyArn),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      timeout: cdktn.numberToTerraform(this._timeout),
      use_resource_timeout_for_propagation: cdktn.booleanToTerraform(this._useResourceTimeoutForPropagation),
      capacity_provider_config: awsLambdaFunctionCapacityProviderConfigPropertyToTerraform(this._capacityProviderConfig.internalValue),
      dead_letter_config: awsLambdaFunctionDeadLetterConfigPropertyToTerraform(this._deadLetterConfig.internalValue),
      durable_config: awsLambdaFunctionDurableConfigPropertyToTerraform(this._durableConfig.internalValue),
      environment: awsLambdaFunctionEnvironmentPropertyToTerraform(this._environment.internalValue),
      ephemeral_storage: awsLambdaFunctionEphemeralStoragePropertyToTerraform(this._ephemeralStorage.internalValue),
      file_system_config: awsLambdaFunctionFileSystemConfigPropertyToTerraform(this._fileSystemConfig.internalValue),
      image_config: awsLambdaFunctionImageConfigPropertyToTerraform(this._imageConfig.internalValue),
      logging_config: awsLambdaFunctionLoggingConfigPropertyToTerraform(this._loggingConfig.internalValue),
      snap_start: awsLambdaFunctionSnapStartPropertyToTerraform(this._snapStart.internalValue),
      tenancy_config: awsLambdaFunctionTenancyConfigPropertyToTerraform(this._tenancyConfig.internalValue),
      timeouts: awsLambdaFunctionTimeoutsPropertyToTerraform(this._timeouts.internalValue),
      tracing_config: awsLambdaFunctionTracingConfigPropertyToTerraform(this._tracingConfig.internalValue),
      vpc_config: awsLambdaFunctionVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architectures: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._architectures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      code_sha256: {
        value: cdktn.stringToHclTerraform(this._codeSha256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_signing_config_arn: {
        value: cdktn.stringToHclTerraform(this._codeSigningConfigArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktn.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktn.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handler: {
        value: cdktn.stringToHclTerraform(this._handler),
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
      image_uri: {
        value: cdktn.stringToHclTerraform(this._imageUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._layers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      memory_size: {
        value: cdktn.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      package_type: {
        value: cdktn.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish: {
        value: cdktn.booleanToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      publish_to: {
        value: cdktn.stringToHclTerraform(this._publishTo),
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
      replace_security_groups_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._replaceSecurityGroupsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replacement_security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._replacementSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reserved_concurrent_executions: {
        value: cdktn.numberToHclTerraform(this._reservedConcurrentExecutions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktn.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktn.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key: {
        value: cdktn.stringToHclTerraform(this._s3Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_object_version: {
        value: cdktn.stringToHclTerraform(this._s3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktn.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_code_hash: {
        value: cdktn.stringToHclTerraform(this._sourceCodeHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_kms_key_arn: {
        value: cdktn.stringToHclTerraform(this._sourceKmsKeyArn),
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
      timeout: {
        value: cdktn.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_resource_timeout_for_propagation: {
        value: cdktn.booleanToHclTerraform(this._useResourceTimeoutForPropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_provider_config: {
        value: awsLambdaFunctionCapacityProviderConfigPropertyToHclTerraform(this._capacityProviderConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.CapacityProviderConfigPropertyList",
      },
      dead_letter_config: {
        value: awsLambdaFunctionDeadLetterConfigPropertyToHclTerraform(this._deadLetterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.DeadLetterConfigPropertyList",
      },
      durable_config: {
        value: awsLambdaFunctionDurableConfigPropertyToHclTerraform(this._durableConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.DurableConfigPropertyList",
      },
      environment: {
        value: awsLambdaFunctionEnvironmentPropertyToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.EnvironmentPropertyList",
      },
      ephemeral_storage: {
        value: awsLambdaFunctionEphemeralStoragePropertyToHclTerraform(this._ephemeralStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.EphemeralStoragePropertyList",
      },
      file_system_config: {
        value: awsLambdaFunctionFileSystemConfigPropertyToHclTerraform(this._fileSystemConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.FileSystemConfigPropertyList",
      },
      image_config: {
        value: awsLambdaFunctionImageConfigPropertyToHclTerraform(this._imageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.ImageConfigPropertyList",
      },
      logging_config: {
        value: awsLambdaFunctionLoggingConfigPropertyToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.LoggingConfigPropertyList",
      },
      snap_start: {
        value: awsLambdaFunctionSnapStartPropertyToHclTerraform(this._snapStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.SnapStartPropertyList",
      },
      tenancy_config: {
        value: awsLambdaFunctionTenancyConfigPropertyToHclTerraform(this._tenancyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.TenancyConfigPropertyList",
      },
      timeouts: {
        value: awsLambdaFunctionTimeoutsPropertyToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsLambdaFunction.TimeoutsProperty",
      },
      tracing_config: {
        value: awsLambdaFunctionTracingConfigPropertyToHclTerraform(this._tracingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.TracingConfigPropertyList",
      },
      vpc_config: {
        value: awsLambdaFunctionVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLambdaFunction.VpcConfigPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

export function awsLambdaFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToTerraform(struct?: AwsLambdaFunction.LambdaManagedInstancesCapacityProviderConfigPropertyOutputReference | AwsLambdaFunction.LambdaManagedInstancesCapacityProviderConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity_provider_arn: cdktn.stringToTerraform(struct!.capacityProviderArn),
    execution_environment_memory_gib_per_vcpu: cdktn.numberToTerraform(struct!.executionEnvironmentMemoryGibPerVcpu),
    per_execution_environment_max_concurrency: cdktn.numberToTerraform(struct!.perExecutionEnvironmentMaxConcurrency),
  }
}


export function awsLambdaFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.LambdaManagedInstancesCapacityProviderConfigPropertyOutputReference | AwsLambdaFunction.LambdaManagedInstancesCapacityProviderConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.capacityProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_environment_memory_gib_per_vcpu: {
      value: cdktn.numberToHclTerraform(struct!.executionEnvironmentMemoryGibPerVcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_execution_environment_max_concurrency: {
      value: cdktn.numberToHclTerraform(struct!.perExecutionEnvironmentMaxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionCapacityProviderConfigPropertyToTerraform(struct?: AwsLambdaFunction.CapacityProviderConfigPropertyOutputReference | AwsLambdaFunction.CapacityProviderConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lambda_managed_instances_capacity_provider_config: awsLambdaFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToTerraform(struct!.lambdaManagedInstancesCapacityProviderConfig),
  }
}


export function awsLambdaFunctionCapacityProviderConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.CapacityProviderConfigPropertyOutputReference | AwsLambdaFunction.CapacityProviderConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lambda_managed_instances_capacity_provider_config: {
      value: awsLambdaFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToHclTerraform(struct!.lambdaManagedInstancesCapacityProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaManagedInstancesCapacityProviderConfigPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionDeadLetterConfigPropertyToTerraform(struct?: AwsLambdaFunction.DeadLetterConfigPropertyOutputReference | AwsLambdaFunction.DeadLetterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_arn: cdktn.stringToTerraform(struct!.targetArn),
  }
}


export function awsLambdaFunctionDeadLetterConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.DeadLetterConfigPropertyOutputReference | AwsLambdaFunction.DeadLetterConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_arn: {
      value: cdktn.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionDurableConfigPropertyToTerraform(struct?: AwsLambdaFunction.DurableConfigPropertyOutputReference | AwsLambdaFunction.DurableConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    execution_timeout: cdktn.numberToTerraform(struct!.executionTimeout),
    retention_period: cdktn.numberToTerraform(struct!.retentionPeriod),
  }
}


export function awsLambdaFunctionDurableConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.DurableConfigPropertyOutputReference | AwsLambdaFunction.DurableConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    execution_timeout: {
      value: cdktn.numberToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_period: {
      value: cdktn.numberToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionEnvironmentPropertyToTerraform(struct?: AwsLambdaFunction.EnvironmentPropertyOutputReference | AwsLambdaFunction.EnvironmentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.variables),
  }
}


export function awsLambdaFunctionEnvironmentPropertyToHclTerraform(struct?: AwsLambdaFunction.EnvironmentPropertyOutputReference | AwsLambdaFunction.EnvironmentProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionEphemeralStoragePropertyToTerraform(struct?: AwsLambdaFunction.EphemeralStoragePropertyOutputReference | AwsLambdaFunction.EphemeralStorageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    size: cdktn.numberToTerraform(struct!.size),
  }
}


export function awsLambdaFunctionEphemeralStoragePropertyToHclTerraform(struct?: AwsLambdaFunction.EphemeralStoragePropertyOutputReference | AwsLambdaFunction.EphemeralStorageProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionFileSystemConfigPropertyToTerraform(struct?: AwsLambdaFunction.FileSystemConfigPropertyOutputReference | AwsLambdaFunction.FileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    local_mount_path: cdktn.stringToTerraform(struct!.localMountPath),
  }
}


export function awsLambdaFunctionFileSystemConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.FileSystemConfigPropertyOutputReference | AwsLambdaFunction.FileSystemConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_mount_path: {
      value: cdktn.stringToHclTerraform(struct!.localMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionImageConfigPropertyToTerraform(struct?: AwsLambdaFunction.ImageConfigPropertyOutputReference | AwsLambdaFunction.ImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
    working_directory: cdktn.stringToTerraform(struct!.workingDirectory),
  }
}


export function awsLambdaFunctionImageConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.ImageConfigPropertyOutputReference | AwsLambdaFunction.ImageConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entry_point: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    working_directory: {
      value: cdktn.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionLoggingConfigPropertyToTerraform(struct?: AwsLambdaFunction.LoggingConfigPropertyOutputReference | AwsLambdaFunction.LoggingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_log_level: cdktn.stringToTerraform(struct!.applicationLogLevel),
    log_format: cdktn.stringToTerraform(struct!.logFormat),
    log_group: cdktn.stringToTerraform(struct!.logGroup),
    system_log_level: cdktn.stringToTerraform(struct!.systemLogLevel),
  }
}


export function awsLambdaFunctionLoggingConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.LoggingConfigPropertyOutputReference | AwsLambdaFunction.LoggingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_log_level: {
      value: cdktn.stringToHclTerraform(struct!.applicationLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktn.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group: {
      value: cdktn.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_log_level: {
      value: cdktn.stringToHclTerraform(struct!.systemLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionSnapStartPropertyToTerraform(struct?: AwsLambdaFunction.SnapStartPropertyOutputReference | AwsLambdaFunction.SnapStartProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apply_on: cdktn.stringToTerraform(struct!.applyOn),
  }
}


export function awsLambdaFunctionSnapStartPropertyToHclTerraform(struct?: AwsLambdaFunction.SnapStartPropertyOutputReference | AwsLambdaFunction.SnapStartProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apply_on: {
      value: cdktn.stringToHclTerraform(struct!.applyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionTenancyConfigPropertyToTerraform(struct?: AwsLambdaFunction.TenancyConfigPropertyOutputReference | AwsLambdaFunction.TenancyConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tenant_isolation_mode: cdktn.stringToTerraform(struct!.tenantIsolationMode),
  }
}


export function awsLambdaFunctionTenancyConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.TenancyConfigPropertyOutputReference | AwsLambdaFunction.TenancyConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tenant_isolation_mode: {
      value: cdktn.stringToHclTerraform(struct!.tenantIsolationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionTimeoutsPropertyToTerraform(struct?: AwsLambdaFunction.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsLambdaFunctionTimeoutsPropertyToHclTerraform(struct?: AwsLambdaFunction.TimeoutsProperty | cdktn.IResolvable): any {
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


export function awsLambdaFunctionTracingConfigPropertyToTerraform(struct?: AwsLambdaFunction.TracingConfigPropertyOutputReference | AwsLambdaFunction.TracingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function awsLambdaFunctionTracingConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.TracingConfigPropertyOutputReference | AwsLambdaFunction.TracingConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function awsLambdaFunctionVpcConfigPropertyToTerraform(struct?: AwsLambdaFunction.VpcConfigPropertyOutputReference | AwsLambdaFunction.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ipv6_allowed_for_dual_stack: cdktn.booleanToTerraform(struct!.ipv6AllowedForDualStack),
    security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function awsLambdaFunctionVpcConfigPropertyToHclTerraform(struct?: AwsLambdaFunction.VpcConfigPropertyOutputReference | AwsLambdaFunction.VpcConfigProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ipv6_allowed_for_dual_stack: {
      value: cdktn.booleanToHclTerraform(struct!.ipv6AllowedForDualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace AwsLambdaFunction {
export interface LambdaManagedInstancesCapacityProviderConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#capacity_provider_arn AwsLambdaFunction#capacity_provider_arn}
  */
  readonly capacityProviderArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#execution_environment_memory_gib_per_vcpu AwsLambdaFunction#execution_environment_memory_gib_per_vcpu}
  */
  readonly executionEnvironmentMemoryGibPerVcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#per_execution_environment_max_concurrency AwsLambdaFunction#per_execution_environment_max_concurrency}
  */
  readonly perExecutionEnvironmentMaxConcurrency?: number;
}
export class LambdaManagedInstancesCapacityProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaManagedInstancesCapacityProviderConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderArn = this._capacityProviderArn;
    }
    if (this._executionEnvironmentMemoryGibPerVcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionEnvironmentMemoryGibPerVcpu = this._executionEnvironmentMemoryGibPerVcpu;
    }
    if (this._perExecutionEnvironmentMaxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.perExecutionEnvironmentMaxConcurrency = this._perExecutionEnvironmentMaxConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaManagedInstancesCapacityProviderConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityProviderArn = undefined;
      this._executionEnvironmentMemoryGibPerVcpu = undefined;
      this._perExecutionEnvironmentMaxConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityProviderArn = value.capacityProviderArn;
      this._executionEnvironmentMemoryGibPerVcpu = value.executionEnvironmentMemoryGibPerVcpu;
      this._perExecutionEnvironmentMaxConcurrency = value.perExecutionEnvironmentMaxConcurrency;
    }
  }

  // capacity_provider_arn - computed: false, optional: false, required: true
  private _capacityProviderArn?: string; 
  public get capacityProviderArn() {
    return this.getStringAttribute('capacity_provider_arn');
  }
  public set capacityProviderArn(value: string) {
    this._capacityProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderArnInput() {
    return this._capacityProviderArn;
  }

  // execution_environment_memory_gib_per_vcpu - computed: true, optional: true, required: false
  private _executionEnvironmentMemoryGibPerVcpu?: number; 
  public get executionEnvironmentMemoryGibPerVcpu() {
    return this.getNumberAttribute('execution_environment_memory_gib_per_vcpu');
  }
  public set executionEnvironmentMemoryGibPerVcpu(value: number) {
    this._executionEnvironmentMemoryGibPerVcpu = value;
  }
  public resetExecutionEnvironmentMemoryGibPerVcpu() {
    this._executionEnvironmentMemoryGibPerVcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEnvironmentMemoryGibPerVcpuInput() {
    return this._executionEnvironmentMemoryGibPerVcpu;
  }

  // per_execution_environment_max_concurrency - computed: true, optional: true, required: false
  private _perExecutionEnvironmentMaxConcurrency?: number; 
  public get perExecutionEnvironmentMaxConcurrency() {
    return this.getNumberAttribute('per_execution_environment_max_concurrency');
  }
  public set perExecutionEnvironmentMaxConcurrency(value: number) {
    this._perExecutionEnvironmentMaxConcurrency = value;
  }
  public resetPerExecutionEnvironmentMaxConcurrency() {
    this._perExecutionEnvironmentMaxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perExecutionEnvironmentMaxConcurrencyInput() {
    return this._perExecutionEnvironmentMaxConcurrency;
  }
}
export interface CapacityProviderConfigProperty {
  /**
  * lambda_managed_instances_capacity_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#lambda_managed_instances_capacity_provider_config AwsLambdaFunction#lambda_managed_instances_capacity_provider_config}
  */
  readonly lambdaManagedInstancesCapacityProviderConfig: LambdaManagedInstancesCapacityProviderConfigProperty;
}
export class CapacityProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CapacityProviderConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaManagedInstancesCapacityProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaManagedInstancesCapacityProviderConfig = this._lambdaManagedInstancesCapacityProviderConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapacityProviderConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaManagedInstancesCapacityProviderConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaManagedInstancesCapacityProviderConfig.internalValue = value.lambdaManagedInstancesCapacityProviderConfig;
    }
  }

  // lambda_managed_instances_capacity_provider_config - computed: false, optional: false, required: true
  private _lambdaManagedInstancesCapacityProviderConfig = new LambdaManagedInstancesCapacityProviderConfigPropertyOutputReference(this, "lambda_managed_instances_capacity_provider_config");
  public get lambdaManagedInstancesCapacityProviderConfig() {
    return this._lambdaManagedInstancesCapacityProviderConfig;
  }
  public putLambdaManagedInstancesCapacityProviderConfig(value: LambdaManagedInstancesCapacityProviderConfigProperty) {
    this._lambdaManagedInstancesCapacityProviderConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaManagedInstancesCapacityProviderConfigInput() {
    return this._lambdaManagedInstancesCapacityProviderConfig.internalValue;
  }
}
export interface DeadLetterConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#target_arn AwsLambdaFunction#target_arn}
  */
  readonly targetArn: string;
}
export class DeadLetterConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeadLetterConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeadLetterConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetArn = value.targetArn;
    }
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface DurableConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#execution_timeout AwsLambdaFunction#execution_timeout}
  */
  readonly executionTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#retention_period AwsLambdaFunction#retention_period}
  */
  readonly retentionPeriod?: number;
}
export class DurableConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DurableConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DurableConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionTimeout = undefined;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionTimeout = value.executionTimeout;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // execution_timeout - computed: false, optional: false, required: true
  private _executionTimeout?: number; 
  public get executionTimeout() {
    return this.getNumberAttribute('execution_timeout');
  }
  public set executionTimeout(value: number) {
    this._executionTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface EnvironmentProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#variables AwsLambdaFunction#variables}
  */
  readonly variables?: { [key: string]: string };
}
export class EnvironmentPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variables = value.variables;
    }
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}
export interface EphemeralStorageProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#size AwsLambdaFunction#size}
  */
  readonly size?: number;
}
export class EphemeralStoragePropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EphemeralStorageProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralStorageProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface FileSystemConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#arn AwsLambdaFunction#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#local_mount_path AwsLambdaFunction#local_mount_path}
  */
  readonly localMountPath: string;
}
export class FileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileSystemConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._localMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountPath = this._localMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileSystemConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._localMountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._localMountPath = value.localMountPath;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // local_mount_path - computed: false, optional: false, required: true
  private _localMountPath?: string; 
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
  public set localMountPath(value: string) {
    this._localMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountPathInput() {
    return this._localMountPath;
  }
}
export interface ImageConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#command AwsLambdaFunction#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#entry_point AwsLambdaFunction#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#working_directory AwsLambdaFunction#working_directory}
  */
  readonly workingDirectory?: string;
}
export class ImageConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._entryPoint = undefined;
      this._workingDirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._entryPoint = value.entryPoint;
      this._workingDirectory = value.workingDirectory;
    }
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

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string[]; 
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }
  public set entryPoint(value: string[]) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }
}
export interface LoggingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#application_log_level AwsLambdaFunction#application_log_level}
  */
  readonly applicationLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#log_format AwsLambdaFunction#log_format}
  */
  readonly logFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#log_group AwsLambdaFunction#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#system_log_level AwsLambdaFunction#system_log_level}
  */
  readonly systemLogLevel?: string;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationLogLevel = this._applicationLogLevel;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._systemLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLogLevel = this._systemLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationLogLevel = undefined;
      this._logFormat = undefined;
      this._logGroup = undefined;
      this._systemLogLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationLogLevel = value.applicationLogLevel;
      this._logFormat = value.logFormat;
      this._logGroup = value.logGroup;
      this._systemLogLevel = value.systemLogLevel;
    }
  }

  // application_log_level - computed: false, optional: true, required: false
  private _applicationLogLevel?: string; 
  public get applicationLogLevel() {
    return this.getStringAttribute('application_log_level');
  }
  public set applicationLogLevel(value: string) {
    this._applicationLogLevel = value;
  }
  public resetApplicationLogLevel() {
    this._applicationLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogLevelInput() {
    return this._applicationLogLevel;
  }

  // log_format - computed: false, optional: false, required: true
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // system_log_level - computed: false, optional: true, required: false
  private _systemLogLevel?: string; 
  public get systemLogLevel() {
    return this.getStringAttribute('system_log_level');
  }
  public set systemLogLevel(value: string) {
    this._systemLogLevel = value;
  }
  public resetSystemLogLevel() {
    this._systemLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLogLevelInput() {
    return this._systemLogLevel;
  }
}
export interface SnapStartProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#apply_on AwsLambdaFunction#apply_on}
  */
  readonly applyOn: string;
}
export class SnapStartPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnapStartProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyOn = this._applyOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapStartProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyOn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyOn = value.applyOn;
    }
  }

  // apply_on - computed: false, optional: false, required: true
  private _applyOn?: string; 
  public get applyOn() {
    return this.getStringAttribute('apply_on');
  }
  public set applyOn(value: string) {
    this._applyOn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnInput() {
    return this._applyOn;
  }

  // optimization_status - computed: true, optional: false, required: false
  public get optimizationStatus() {
    return this.getStringAttribute('optimization_status');
  }
}
export interface TenancyConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#tenant_isolation_mode AwsLambdaFunction#tenant_isolation_mode}
  */
  readonly tenantIsolationMode: string;
}
export class TenancyConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenancyConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tenantIsolationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantIsolationMode = this._tenantIsolationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenancyConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tenantIsolationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tenantIsolationMode = value.tenantIsolationMode;
    }
  }

  // tenant_isolation_mode - computed: false, optional: false, required: true
  private _tenantIsolationMode?: string; 
  public get tenantIsolationMode() {
    return this.getStringAttribute('tenant_isolation_mode');
  }
  public set tenantIsolationMode(value: string) {
    this._tenantIsolationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIsolationModeInput() {
    return this._tenantIsolationMode;
  }
}
export interface TimeoutsProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#create AwsLambdaFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#delete AwsLambdaFunction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#update AwsLambdaFunction#update}
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
export interface TracingConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#mode AwsLambdaFunction#mode}
  */
  readonly mode: string;
}
export class TracingConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TracingConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TracingConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface VpcConfigProperty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#ipv6_allowed_for_dual_stack AwsLambdaFunction#ipv6_allowed_for_dual_stack}
  */
  readonly ipv6AllowedForDualStack?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#security_group_ids AwsLambdaFunction#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/lambda_function#subnet_ids AwsLambdaFunction#subnet_ids}
  */
  readonly subnetIds: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcConfigProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6AllowedForDualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AllowedForDualStack = this._ipv6AllowedForDualStack;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6AllowedForDualStack = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6AllowedForDualStack = value.ipv6AllowedForDualStack;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // ipv6_allowed_for_dual_stack - computed: false, optional: true, required: false
  private _ipv6AllowedForDualStack?: boolean | cdktn.IResolvable; 
  public get ipv6AllowedForDualStack() {
    return this.getBooleanAttribute('ipv6_allowed_for_dual_stack');
  }
  public set ipv6AllowedForDualStack(value: boolean | cdktn.IResolvable) {
    this._ipv6AllowedForDualStack = value;
  }
  public resetIpv6AllowedForDualStack() {
    this._ipv6AllowedForDualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowedForDualStackInput() {
    return this._ipv6AllowedForDualStack;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktn.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}
}
