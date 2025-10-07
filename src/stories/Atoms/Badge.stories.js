import Badge from "./Badge";
// import { allModes } from "../../../.storybook/modes.js";

export default {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    style: {
      control: {
        type: "select",
        options: ["new", "success", "warning"],
      },
    },
    parameters: {
      layout: "centered",
      chromatic: {
        //disableSnapshot: true,
        diffThreshold: 0.5,
      },
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
