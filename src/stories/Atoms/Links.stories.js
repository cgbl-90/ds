import Links from "./Links";

export default {
  title: "Atoms/Links",
  component: Links,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    style: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "danger"],
      },
    },
    bold: { control: "boolean" },
    italic: { control: "boolean" },
  },
};

const Template = (args) => <Links {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Link",
  href: "#",
  style: "primary",
  bold: false,
  italic: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Link",
  href: "#",
  style: "secondary",
  bold: false,
  italic: false,
};

export const Success = Template.bind({});
Success.args = {
  text: "Success Link",
  href: "#",
  style: "success",
  bold: false,
  italic: false,
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning Link",
  href: "#",
  style: "warning",
  bold: false,
  italic: false,
};
