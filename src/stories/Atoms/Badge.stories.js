import React from "react";
import Badge from "./Badge";

export default {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    text: { control: "text" },
    style: {
      control: {
        type: "select",
        options: ["new", "success", "warning"],
      },
    },
    parameters: {
      chromatic: { disableSnapshot: true },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "New",
  style: "new",
};

export const Success = Template.bind({});
Success.args = {
  text: "Success",
  style: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning",
  style: "warning",
};
