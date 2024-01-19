import { StackContext } from "sst/constructs";
import * as codecommit from "aws-cdk-lib/aws-codecommit";
import * as codebuild from "aws-cdk-lib/aws-codebuild";
import * as codepipeline from "aws-cdk-lib/aws-codepipeline";
import * as codepipeline_actions from "aws-cdk-lib/aws-codepipeline-actions";
import * as iam from "aws-cdk-lib/aws-iam";
import * as pipelines from "aws-cdk-lib/pipelines";
import * as cdk from "aws-cdk-lib";

const BuildPipelineStack = ({ stack }: StackContext) => {
  const repo = codecommit.Repository.fromRepositoryName(
    stack,
    "ChrisIvesonRepo",
    "chrisiveson.com",
  );

  const codePipelineName = "ChrisIvesonPipeline";

  const pipeline = new codepipeline.Pipeline(stack, codePipelineName, {
    pipelineName: codePipelineName,
  });

  const sourceOutput = new codepipeline.Artifact();

  pipeline.addStage({
    stageName: "Source-From-Repo",
    actions: [
      new codepipeline_actions.CodeCommitSourceAction({
        actionName: "CodeCommit",
        repository: repo,
        output: sourceOutput,
        branch: "main",
        // TODO: investigate custom trigger based on tags applied to repo
        // trigger: codepipeline_actions.CodeCommitTrigger.EVENTS
      }),
    ],
  });

  const sourceFileSet =
    pipelines.CodePipelineFileSet.fromArtifact(sourceOutput);

  new pipelines.CodePipeline(stack, "Full" + codePipelineName, {
    codePipeline: pipeline,
    synth: new pipelines.CodeBuildStep("Deploy", {
      input: sourceFileSet,
      primaryOutputDirectory: "chrisiveson-sst/.sst/dist",
      env: {
        CI_SST_CONFIG_NAME: "development",
      },
      commands: [
        "n 18",
        "cd ./NextJsSite",
        "npm install -g pnpm",
        "echo pnpm installed",
        "pnpm install --frozen-lockfile",
        "cd ../chrisiveson-sst",
        "pnpm install --frozen-lockfile",
        "npx sst deploy --stage root",
      ],
      rolePolicyStatements: [
        new cdk.aws_iam.PolicyStatement({
          actions: ["sts:AssumeRole"],
          resources: ["*"],
          conditions: {
            StringEquals: {
              "iam:ResourceTag/aws-cdk:bootstrap-role": [
                "lookup",
                "image-publishing",
                "file-publishing",
                "deploy",
              ],
            },
          },
        }),
        new cdk.aws_iam.PolicyStatement({
          actions: [
            "cloudformation:CreateStack",
            "cloudformation:CreateChangeSet",
            "cloudformation:ListStacks",
            "cloudformation:UpdateStack",
            "cloudformation:DescribeChangeSet",
            "cloudformation:ExecuteChangeSet",
            "cloudformation:DescribeStacks",
            "cloudformation:DescribeStackEvents",
            "cloudformation:DescribeStackResource",
            "cloudformation:DescribeStackResources",
          ],
          resources: ["*"],
        }),
      ],
    }),
    selfMutation: false,
  });
};

export default BuildPipelineStack;
