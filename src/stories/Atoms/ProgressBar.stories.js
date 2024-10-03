import React from "react";
import ProgressBar from "./ProgressBar";

export default {
  title: "Atoms/Progress Bar",
  component: ProgressBar,
  argTypes: {
    progress: { control: { type: "range", min: 0, max: 100 } },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50, // Default progress set to 50%
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100, // Full progress
};

export const InProgress = Template.bind({});
InProgress.args = {
  progress: 75, // 75% progress
};

export const Minimal = Template.bind({});
Minimal.args = {
  progress: 25, // 25% progress
};
