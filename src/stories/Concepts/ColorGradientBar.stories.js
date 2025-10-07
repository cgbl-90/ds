import { ColorGradientBar } from "./ColorGradientBar";

export default {
  title: "Concepts/Threshold",
  component: ColorGradientBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      diffThreshold: 0.063, // Default threshold
    },
  },
  argTypes: {
    isSubtlyChanged: {
      control: "boolean",
      description: "Simulate a color change in the gradient.",
    },
    style: { control: "object", table: { disable: true } },
  },
};

const Template = (args) => <ColorGradientBar {...args} />;

export const DefaultThresholdBaseline = Template.bind({});
DefaultThresholdBaseline.storyName = "Baseline Threshold (0.063)";
DefaultThresholdBaseline.args = {
  isSubtlyChanged: false,
};
DefaultThresholdBaseline.parameters = {
  docs: {
    description: {
      story:
        "This is the baseline story: Dark Blue -> Bright Blue -> Fuchsia. ",
    },
  },
};

export const HighThresholdSubtleChange = Template.bind({});
HighThresholdSubtleChange.storyName = "High Threshold (0.63)";
HighThresholdSubtleChange.args = {
  isSubtlyChanged: true,
};
HighThresholdSubtleChange.parameters = {
  chromatic: {
    diffThreshold: 0.63,
  },
  docs: {
    description: {
      story: `Because the threshold is high, Chromatic is likely to **ignore** color differences.`,
    },
  },
};

export const LowThresholdSubtleChange = Template.bind({});
LowThresholdSubtleChange.storyName = "Low Threshold (0.005)";
LowThresholdSubtleChange.args = {
  isSubtlyChanged: true,
};
LowThresholdSubtleChange.parameters = {
  chromatic: {
    diffThreshold: 0.005,
  },
  docs: {
    description: {
      story: `**The threshold is very low, Chromatic is highly sensitive and will likely **flag** any color difference, even though it may be imperceptible to the human eye.`,
    },
  },
};

export const LowPPIDisplay_SubtleChange = Template.bind({});
LowPPIDisplay_SubtleChange.storyName = "Low PPI (Small Viewport)";
LowPPIDisplay_SubtleChange.args = {
  isSubtlyChanged: true,
  width: "200px",
};
LowPPIDisplay_SubtleChange.parameters = {
  viewport: {
    defaultViewport: "small",
  },
  docs: {
    description: {
      story: `On a lower pixel-density screen (simulated by a small viewport), two different colors may **bleed together**. Even with the default threshold, the subtle difference may be harder to distinguish, potentially leading to a *false negative*.`,
    },
  },
};

export const HighPPIDisplay_SubtleChange = Template.bind({});
HighPPIDisplay_SubtleChange.storyName = "High PPI (Large Viewport)";
HighPPIDisplay_SubtleChange.args = {
  isSubtlyChanged: true,
  width: "600px",
};
HighPPIDisplay_SubtleChange.parameters = {
  viewport: {
    defaultViewport: "large",
  },
  docs: {
    description: {
      story: `On a higher pixel-density screen (simulated by a large viewport), the same colors are **more easily distinguished**. Even with the default threshold, the subtle difference may be more distinct and easier to catch.`,
    },
  },
};
