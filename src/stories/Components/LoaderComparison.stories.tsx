import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Loader from "../Atoms/Loader";
import "../Atoms/loader.css";

const meta = {
  title: "COMPONENTS/LoaderGrid",
  component: Loader,
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Internal Helper Components ---

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px",
};

const loaderWrapperStyle: React.CSSProperties = {
  padding: "50px",
  border: "1px solid #ddd",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
  textAlign: "center",
};

/**
 * A reusable template for the Loader stories to avoid repeating JSX
 * and to allow the Grid story to render them safely.
 */
const LoaderTemplate: React.FC<{ title: string }> = ({ title }) => (
  <div style={containerStyle}>
    <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>{title}</h3>
    <div style={loaderWrapperStyle}>
      <Loader />
    </div>
  </div>
);

// --- Stories ---

/** * OPTION 1: disableSnapshot
 * Prevents Chromatic from taking any visual snapshot of this story.
 */
export const LoaderVariant1: Story = {
  render: () => <LoaderTemplate title="disableSnapshot: true" />,
  parameters: { chromatic: { disableSnapshot: true } },
};

/** * OPTION 2: ignoreSelectors
 * Tells Chromatic to ignore the specific moving part of the loader during diffing.
 */
export const LoaderVariant2: Story = {
  render: () => <LoaderTemplate title="ignoreSelectors: ['.loader']" />,
  parameters: { chromatic: { ignoreSelectors: [".loader"] } },
};

/** * OPTION 3: pauseAnimationAtEnd: false
 * Default behavior: animations keep running in the snapshot.
 */
export const LoaderVariant3: Story = {
  render: () => <LoaderTemplate title="pauseAnimationAtEnd: false" />,
  parameters: { chromatic: { pauseAnimationAtEnd: false } },
};

/** * OPTION 4: pauseAnimationAtEnd: true
 * Freezes the animation at the last frame for a consistent visual snapshot.
 */
export const LoaderVariant4: Story = {
  render: () => <LoaderTemplate title="pauseAnimationAtEnd: true" />,
  parameters: { chromatic: { pauseAnimationAtEnd: true } },
};

/** * SHOWCASE: Loader Grid
 * Renders all Chromatic test cases in one view for easy comparison.
 */
export const LoaderGrid: Story = {
  render: () => (
    <div style={gridStyle}>
      <LoaderTemplate title="disableSnapshot: true" />
      <LoaderTemplate title="ignoreSelectors: ['.loader']" />
      <LoaderTemplate title="pauseAnimationAtEnd: false" />
      <LoaderTemplate title="pauseAnimationAtEnd: true" />
    </div>
  ),
};
