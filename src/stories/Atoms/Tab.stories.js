import { within, userEvent, expect } from "storybook/test";
import { Tab } from "./Tab";

export default {
  title: "COMPONENTS/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    chromatic: {
      disableSnapshot: true,
    },
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

export const InteractionTab = Template.bind({});
InteractionTab.args = { ...Default.args }; // Ensures it renders the UI

InteractionTab.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const tab1 = canvas.getByRole("button", { name: /Tab 1/i });
  const tab2 = canvas.getByRole("button", { name: /Tab 2/i });
  const tab3 = canvas.getByRole("button", { name: /Tab 3/i });

  await userEvent.click(tab1);
  await expect(canvas.getByText("Content1")).toBeInTheDocument();

  await userEvent.click(tab2);
  await expect(canvas.getByText("Content2")).toBeInTheDocument();

  await userEvent.click(tab3);
  await expect(canvas.getByText("Content3")).toBeInTheDocument();
};
