import { NextjsSite, StackContext } from "sst/constructs";

const NextAppsStack = ({ stack }: StackContext) => {
  const site = new NextjsSite(stack, "ChrisIvesonNextJSSite", {
    path: "../NextJsSite",
    edge: false,
    customDomain: {
      domainName: "chrisiveson.com",
      domainAlias: "www.chrisiveson.com",
      hostedZone: "chrisiveson.com",
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
};

export default NextAppsStack;
