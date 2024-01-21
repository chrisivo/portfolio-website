import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { SecretValue } from "aws-cdk-lib";
import { StackContext } from "sst/constructs";

const SecretsStack = ({ stack }: StackContext) => {
  const chrisIvoSecrets = new secretsmanager.Secret(stack, "ChrisIvoSecrets", {
    secretName: "chrisivo-github-token",
    secretStringValue: SecretValue.unsafePlainText("<place secret here>"),
  });

  const chrisIvesonSiteSecrets = new secretsmanager.Secret(
    stack,
    "ChrisIvesonComSecrets",
    {
      secretName: "chrisiveson-nextjs-site-secrets",
      secretObjectValue: {
        // "unsafe" is being used here because.... it's a blank string!
        mailFromAddr: SecretValue.unsafePlainText(""),
        mailToAddr: SecretValue.unsafePlainText(""),
        resendToken: SecretValue.unsafePlainText(""),
        recaptchaSiteKey: SecretValue.unsafePlainText(""),
        recaptchaSecretKey: SecretValue.unsafePlainText(""),
        googleAnalyticsTagId: SecretValue.unsafePlainText(""),
      },
    },
  );

  stack.addOutputs({
    chrisIvoSecrets: chrisIvoSecrets.secretArn,
    chrisIvesonSiteSecretsArn: chrisIvesonSiteSecrets.secretArn,
    region: stack.region,
  });

  return {
    chrisIvesonSiteSecrets,
  };
};

export default SecretsStack;
