import type { StorybookConfig } from "@storybook/react-webpack5";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    "../public",
  ],
  features: {
    legacyMdx1: true,
  },
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config

    // BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
    config.plugins!.push(new NodePolyfillPlugin());

    // Overrides for lessons/m3/homework/contacts
    Object.assign(config.resolve!.alias!, {
      "react": path.resolve(__dirname, "../node_modules/react"),
      "react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
    });

    return config;
  },
};
export default config;
