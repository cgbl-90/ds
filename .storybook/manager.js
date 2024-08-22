import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  fontBase: "Verdana",
  fontCode: "monospace",

  brandTitle: "Camy's",
  brandUrl: "https://github.com/cgbl-90",
  brandImage: require("../src/stories/logo.png"),
  brandTarget: "_self",

  //
  colorPrimary: "#2e09d0",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 5,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barHoverColor: "#2e09d0",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 5,
});

addons.setConfig({
  theme,
});
