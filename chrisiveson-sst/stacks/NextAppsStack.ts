import { NextjsSite, StackContext, use } from "sst/constructs";
import SecretsStack from "./SecretsStack";
import * as iam from "aws-cdk-lib/aws-iam";

const NextAppsStack = ({ stack }: StackContext) => {
  const { chrisIvesonSiteSecrets } = use(SecretsStack);

  const site = new NextjsSite(stack, "ChrisIvesonNextJSSite", {
    path: "../NextJsSite",
    edge: false,
    customDomain: {
      domainName: "chrisiveson.com",
      domainAlias: "www.chrisiveson.com",
      hostedZone: "chrisiveson.com",
    },
    environment: {
      SITE_SECRETS_ARN: chrisIvesonSiteSecrets.secretArn,
      SITE_SECRETS_REGION: stack.region,
    },
  });

  site.attachPermissions([
    new iam.PolicyStatement({
      actions: ["secretsmanager:GetSecretValue"],
      effect: iam.Effect.ALLOW,
      resources: [chrisIvesonSiteSecrets.secretArn],
    }),
  ]);

  stack.addOutputs({
    SiteUrl: site.url,
  });
};

export default NextAppsStack;
