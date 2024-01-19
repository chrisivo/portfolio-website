import { SSTConfig } from "sst";
import BuildPipelineStack from "./stacks/BuildPipelineStack";
import NextAppsStack from "./stacks/NextAppsStack";

export default {
  config(_input) {
    return {
      name: "chrisiveson-sst",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(BuildPipelineStack).stack(NextAppsStack);
  },
} satisfies SSTConfig;
