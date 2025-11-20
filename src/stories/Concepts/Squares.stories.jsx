import { Square } from "./Squares";

export default {
  title: "Concepts/Square",
  component: Square,
  parameters: {
    layout: "centered",
  },

  args: {
    sizeClass: "square-50",
    className: "",
  },
  argTypes: {
    sizeClass: {
      control: "select",
      options: ["square-50", "square-100", "square-200"],
      description:
        "The CSS class that controls the width and height of the square.",
    },
  },
};

const Template = (args) => <Square {...args} />;

export const Centered50x50 = Template.bind({});
Centered50x50.storyName = "Centered 50x50 Square";
Centered50x50.args = {};

// New story for the 100x100 square
export const Centered100x100 = Template.bind({});
Centered100x100.storyName = "Centered 100x100 Square";
Centered100x100.args = {
  sizeClass: "square-100",
};

// 200
export const Centered200x200 = Template.bind({});
Centered200x200.storyName = "Centered 200x200 Square";
Centered200x200.args = {
  sizeClass: "square-100",
};
