import { addons } from "@storybook/manager-api";
import customTheme from "./customTheme.js"; // Import the theme

addons.setConfig({
  theme: customTheme, // Use the imported theme
});
