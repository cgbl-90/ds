import { create } from "@storybook/theming/create";

// All your theme settings live in this one file
export default create({
  base: "light",
  colorScheme: "light", // The important fix
  brandTitle: "Camy's",
  brandUrl: "https://github.com/cgbl-90",
  // ...and all your other theme properties
});
