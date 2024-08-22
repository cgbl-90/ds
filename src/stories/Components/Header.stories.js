import { Header } from "./Header";
import { fn } from "@storybook/test";

export default {
  title: "COMPONENTS/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Lovely Gloria",
    },
  },
};

export const LoggedOut = {};
