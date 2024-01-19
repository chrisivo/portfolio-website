import { SSTConfig } from "sst";
import BuildPipelineStack from "./stacks/BuildPipelineStack";
import NextAppsStack from "./stacks/NextAppsStack";
import SecretsStack from "./stacks/SecretsStack";

export default {
  config(_input) {
    return {
      name: "chrisiveson-sst",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(SecretsStack).stack(BuildPipelineStack).stack(NextAppsStack);
  },
} satisfies SSTConfig;
