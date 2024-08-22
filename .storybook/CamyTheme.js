import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  fontBase: "Verdana",
  fontCode: "monospace",

  brandTitle: "Camy's",
  brandUrl: "https://github.com/cgbl-90",
  brandImage: require("../src/stories/logo.png"),
  brandTarget: "_self",

  //
  colorPrimary: "#3A10E5",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barHoverColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 5,
});
