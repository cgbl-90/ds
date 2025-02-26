import { Tab } from "./Tab";

export default {
  title: "COMPONENTS/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  args: {},
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: "Tab 1", content: "Content1" },
    { label: "Tab 2", content: "Content2" },
    { label: "Tab 3", content: "Content3" },
  ],
};
