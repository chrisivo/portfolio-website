import { NextjsSite, StackContext, use } from "sst/constructs";
import SecretsStack from "./SecretsStack";

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

  stack.addOutputs({
    SiteUrl: site.url,
  });
};

export default NextAppsStack;
