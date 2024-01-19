import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { SecretValue } from "aws-cdk-lib";
import { StackContext, use } from "sst/constructs";

const SecretsStack = ({ stack }: StackContext) => {
  const chrisIvoSecrets = new secretsmanager.Secret(stack, "ChrisIvoSecrets", {
    secretName: "chrisivo-github-token",
    secretStringValue: SecretValue.unsafePlainText("<place secret here>"),
  });

  stack.addOutputs({
    secretsArn: chrisIvoSecrets.secretArn,
  });

  return {
    chrisIvoSecrets,
  };
};

export default SecretsStack;
