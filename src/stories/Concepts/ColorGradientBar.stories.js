import { ColorGradientBar } from "./ColorGradientBar";

export default {
  title: "Concepts/Threshold",
  component: ColorGradientBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    chromatic: {
      diffThreshold: 0.063,
    },
    docs: {
      description: {
        component: `The **Chromatic Threshold** is a measure of the color difference in color space (e.g., LAB) required to flag a change. It's not measured in screen space (pixels).
        
        * **High Threshold (e.g., 0.63)**: Only flags visually *clear* differences to the human eye. The snapshot is less sensitive to small changes.
        * **Low Threshold (e.g., 0.005)**: Flags *subtle* color differences, used for high-precision control. The snapshot is more sensitive.
        * **Default Threshold (0.063)**: Balances visual accuracy with a low rate of false positives from non-deterministic rendering (like anti-aliasing).
        
        Use the following stories to see how a color change is only caught when the threshold is lowered.`,
      },
    },
  },
  argTypes: {
    isSubtlyChanged: {
      control: "boolean",
      description:
        "Simulate a minor, hard-to-detect color change in the gradient.",
    },
  },
};

const Template = (args) => <ColorGradientBar {...args} />;

export const DefaultThresholdBaseline = Template.bind({});
DefaultThresholdBaseline.storyName = "Baseline (Threshold 0.063)";
DefaultThresholdBaseline.args = {
  isSubtlyChanged: false,
};
DefaultThresholdBaseline.parameters = {
  chromatic: {
    diffThreshold: 0.063, // Chromatic's default
  },
  docs: {
    description: {
      story:
        "This is the baseline story: Dark Blue -> Bright Blue -> Fuchsia. All subsequent stories will be compared against this one to detect visual changes.",
    },
  },
};

export const HighThresholdSubtleChange = Template.bind({});
HighThresholdSubtleChange.storyName = "High Threshold (0.63) - Subtle Change";
HighThresholdSubtleChange.args = {
  isSubtlyChanged: true, // Component has the subtle color change (Fuchsia to #F000F0)
};
HighThresholdSubtleChange.parameters = {
  chromatic: {
    diffThreshold: 0.63,
  },
  docs: {
    description: {
      story: `**Threshold: 0.63 (Less Sensitive)**. The component has a minor color change (Fuchsia to #F000F0), but because the threshold is high, Chromatic is likely to **ignore** the difference as it's below the minimum required for a "clearly different" color change.`,
    },
  },
};

// --------------------------------------------------------------------------------

export const LowThresholdSubtleChange = Template.bind({});
LowThresholdSubtleChange.storyName = "3. Low Threshold (0.005) - Subtle Change";
LowThresholdSubtleChange.args = {
  isSubtlyChanged: true,
};
LowThresholdSubtleChange.parameters = {
  chromatic: {
    diffThreshold: 0.005,
  },
  docs: {
    description: {
      story: `**Threshold: 0.005 (Highly Sensitive)**. The component has a minor color change. Because the threshold is very low, Chromatic is highly sensitive and will likely **flag** the difference, even though it may be imperceptible to the human eye. This is useful for maximum precision control.`,
    },
  },
};

export const HighThresholdMajorChange = Template.bind({});
HighThresholdMajorChange.storyName = "4. High Threshold (0.63) - Major Change";
HighThresholdMajorChange.args = {
  isSubtlyChanged: false,
  width: "400px",
  height: "50px",
  style: {
    background: "linear-gradient(90deg, #011E58 0%, #2563EB 50%, #00FFFF 100%)",
  },
};
HighThresholdMajorChange.parameters = {
  chromatic: {
    diffThreshold: 0.63,
  },
  docs: {
    description: {
      story: `**Threshold: 0.63 (Less Sensitive)**. The component has a **major** color change (Fuchsia is now Cyan). Even with a high threshold, Chromatic is expected to **flag** this difference, as it's clearly above the tolerance for an "acceptable" color difference.`,
    },
  },
};
