import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StickyHeaderPage } from "./StickyHeaderPage";
import { Header } from "./Header";
import { Typography } from "../Atoms/Typography";
import { fn } from "storybook/test";
import { within, expect } from "storybook/test";

const meta = {
  title: "PAGES/Sticky Header",
  component: StickyHeaderPage,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof StickyHeaderPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Reusable Layout Helper ---
const ScrollablePageLayout: React.FC<{ imageCount?: number; user?: any }> = ({
  imageCount = 7,
  ...args
}) => (
  <div>
    <div className="sticky-header">
      <Header onLogin={fn()} onLogout={fn()} onCreateAccount={fn()} {...args} />
    </div>
    <div className="content">
      <Typography type="title" label={`Page with ${imageCount} Images`} />
      {[...Array(imageCount)].map((_, i) => (
        <div
          key={i}
          data-testid={`image-container-${i}`}
          style={{ margin: "40px 0" }}
        >
          <img
            src={`https://picsum.photos/seed/${i}/1200/400`}
            alt={`Placeholder ${i + 1}`}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      ))}
    </div>
  </div>
);

/** State when a user is authenticated */
export const LoggedIn: Story = {
  args: { user: { name: "Jhonny Bravo" } },
};

/** Demonstrates smooth scrolling to a specific interaction section */
export const InteractionScroll: Story = {
  args: { ...LoggedIn.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const interactionSection = await canvas.findByText(/interaction section/i);
    interactionSection.scrollIntoView({ behavior: "smooth" });
  },
};

/** Visual snapshot of the page scrolled to the middle content */
export const ScrolledToCenter: Story = {
  render: (args) => <ScrollablePageLayout {...args} />,
  parameters: { chromatic: { disableSnapshot: false } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const target = await canvas.findByTestId("image-container-3");
    target.scrollIntoView({ behavior: "auto", block: "center" });
  },
};
