import NotificationDot from "./NotificationDot";

export default {
  title: "ATOMS/Notification Dot",
  component: NotificationDot,
  parameters: {
    layout: "padded",
    chromatic: {
      //disableSnapshot: true,
      diffThreshold: 0,
    },
  },
  argTypes: {
    color: {
      control: { type: "select", options: ["red", "green", "blue", "yellow"] },
    },
    size: {
      control: { type: "number", min: 5, max: 30 },
    },
    position: {
      control: {
        type: "select",
        options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      },
    },
  },
};

const Template = (args) => <NotificationDot {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "red", // Default color
  size: 10, // Default size
  position: "top-right", // Default position
};

export const LargeGreenDot = Template.bind({});
LargeGreenDot.args = {
  color: "green",
  size: 20,
  position: "top-right",
};

export const BlueDotBottomLeft = Template.bind({});
BlueDotBottomLeft.args = {
  color: "blue",
  size: 15,
  position: "bottom-left",
};

export const YellowDotTopLeft = Template.bind({});
YellowDotTopLeft.args = {
  color: "yellow",
  size: 12,
  position: "top-left",
};
