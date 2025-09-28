import Tooltip from "./Tooltip";

export default {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    chromatic: {
      //disableSnapshot: true,
      diffThreshold: 0,
    },
  },
};

const Template = (args) => (
  <Tooltip {...args}>
    <button>Hover over me</button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  text: "This is a tooltip!",
};

export const LongTextTooltip = Template.bind({});
LongTextTooltip.args = {
  text: "This tooltip has a longer text to demonstrate how it behaves.",
};

export const MultipleTooltips = () => (
  <div>
    <Tooltip text="Tooltip 1">
      <button style={{ marginRight: "10px" }}>Hover over button 1</button>
    </Tooltip>
    <Tooltip text="Tooltip 2">
      <button>Hover over button 2</button>
    </Tooltip>
  </div>
);

export const CustomStyledTooltip = Template.bind({});
CustomStyledTooltip.args = {
  text: "Styled tooltip!",
  children: (
    <button style={{ backgroundColor: "green", color: "white" }}>
      Styled Button
    </button>
  ),
};
