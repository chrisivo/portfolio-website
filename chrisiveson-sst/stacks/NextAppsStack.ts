import { NextjsSite, StackContext } from "sst/constructs";
import * as cdk from "aws-cdk-lib";
import { ISiteConfig } from "../types";

const NextAppsStack = ({ stack }: StackContext) => {
  const secrets: ISiteConfig = cdk.SecretValue.secretsManager(
    "chrisiveson-site-secrets",
  ).toJSON();

  const site = new NextjsSite(stack, "ChrisIvesonNextJSSite", {
    path: "../NextJsSite",
    edge: false,
    customDomain: {
      domainName: "chrisiveson.com",
      domainAlias: "www.chrisiveson.com",
      hostedZone: "chrisiveson.com",
    },
    environment: {
      MAIL_FROM_ADDR: secrets.mailFromAddr,
      MAIL_TO_ADDR: secrets.mailFromAddr,
      RESEND_API_KEY: secrets.resendToken,
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
};

export default NextAppsStack;
