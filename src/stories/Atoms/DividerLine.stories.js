import Divider from "./DividerLine";

export default {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
    style: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "danger"],
      },
    },
    dashed: { control: "boolean" },
    dotted: { control: "boolean" },
    bold: { control: "boolean" },
  },
};

const Template = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: "primary",
  dashed: false,
  dotted: false,
  bold: false,
};

export const SecondaryBoldDashed = Template.bind({});
SecondaryBoldDashed.args = {
  style: "secondary",
  dashed: true,
  dotted: false,
  bold: true,
};

export const SuccessDotted = Template.bind({});
SuccessDotted.args = {
  style: "success",
  dashed: false,
  dotted: true,
  bold: false,
};
