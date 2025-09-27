/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [// This is the new, recommended way to get essential addons
  "@storybook/addon-essentials", "@storybook/addon-links", "@storybook/addon-a11y", 
  "@storybook/addon-vitest", {
    name: "@chromatic-com/storybook",
    options: {
      configFile:
        process.env.NODE_ENV === "development"
          ? "chromatic.config.json"
          : "production.config.json",
    },
  }, "@storybook/addon-webpack5-compiler-babel"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  staticDirs: ["../public"],

  docs: {
    // This is the correct way to enable autodocs
    autodocs: "tag",
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
