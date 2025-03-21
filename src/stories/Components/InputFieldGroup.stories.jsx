import { InputFieldGroup } from "./InputFieldGroup";

export default {
  title: "COMPONENTS/InputFieldGroup",
  component: InputFieldGroup,
};

export const WithHint = {
  args: {
    label: "Username",
    value: "user_01",
    badgeText: "Available",
    onChange: () => {},
  },
};

export const WithWarning = {
  args: {
    label: "Phone Number",
    value: "",
    badgeText: "Required",
    onChange: () => {},
  },
};

export const WithInfo = {
  args: {
    label: "Email Address",
    value: "jane@example.com",
    badgeText: "Verified",
    onChange: () => {},
  },
};
