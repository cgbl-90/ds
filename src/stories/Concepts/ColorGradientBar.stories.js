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
    style: { control: "object", table: { disable: true } },
  },
};

const Template = (args) => <ColorGradientBar {...args} />;

export const DefaultThresholdBaseline = Template.bind({});
DefaultThresholdBaseline.storyName = "Baseline Threshold (0.063)";
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

export const GradientAntiAliasingTest = Template.bind({});
GradientAntiAliasingTest.storyName = "Anti-Aliasing & Perceptual Bleed Gradient";
GradientAntiAliasingTest.args = {
  width: "400px",
  height: "50px",
  style: {
    background: "linear-gradient(90deg, #F00000 0%, #00F0F0 30%)", // Red to Cyan over a short 30% span
  },
};
GradientAntiAliasingTest.parameters = {
  chromatic: {
    diffThreshold: 0.005,
  },
  docs: {
    description: {
      story: `This gradient uses highly contrasting, near-complementary colors (Red to Cyan) with a short transition (0% to 30%). This combination forces the browser's rendering engine to heavily use **anti-aliasing and dithering** to smooth the transition, especially on the short, sharp edge.`,
    },
  },
};