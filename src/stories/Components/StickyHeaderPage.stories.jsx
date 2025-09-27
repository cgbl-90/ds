import { StickyHeaderPage } from "./StickyHeaderPage";
import { Header } from "./Header";
import { Typography } from "../Atoms/Typography";
import { action } from "storybook/actions";
import { within, expect } from "storybook/test";

export default {
  title: "PAGES/StickyHeaderPage",
  component: StickyHeaderPage,
  parameters: {
    layout: "fullscreen",
    // Disable snapshots by default for all stories in this file
    // chromatic: { disableSnapshot: true },
  },
  args: {
    onLogin: action("Login clicked"),
    onLogout: action("Logout clicked"),
    onCreateAccount: action("Sign up clicked"),
  },
  // Decorator to wrap stories in a fixed-height container to make them scrollable
  decorators: [
    (Story) => (
      <div style={{ height: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

// --- Reusable Layout for Scrollable Content ---
const ScrollablePageLayout = ({ imageCount = 7, ...args }) => (
  <div>
    <div className="sticky-header">
      <Header {...args} />
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
            alt={`Placeholder image ${i + 1}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "8px",
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

// ============================================================================
// --- 1. Original Stories (Kept as Requested) ---
// ============================================================================

export const LoggedIn = {
  // This story does not have the scroll decorator, it uses the original component
  decorators: [],
  args: {
    user: {
      name: "Jhonny Bravo",
    },
  },
};

export const LoggedOut = {
  decorators: [],
};

// This story uses smooth scrolling for demonstrating the animation to a human user.
// It is not ideal for snapshotting, so chromatic is left disabled.
export const InteractionScroll = {
  decorators: [],
  args: { ...LoggedIn.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const interactionSection = await canvas.findByText(
      "Here’s an interaction section 🧩"
    );
    interactionSection.scrollIntoView({ behavior: "smooth" });
    await new Promise((res) => setTimeout(res, 1000));
  },
};

// ============================================================================
// --- 2. New Stories for Snapshotting Scroll States (7 Versions) ---
// ============================================================================

// --- Story 1: Scroll to Center ---
export const ScrolledToCenter = {
  render: (args) => <ScrollablePageLayout {...args} />,
  args: { ...LoggedIn.args },
  parameters: { chromatic: { disableSnapshot: false } }, // Enable snapshot
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const target = await canvas.findByTestId("image-container-3"); // Target middle element
    target.scrollIntoView({ behavior: "auto", block: "center" });
    await new Promise((resolve) => setTimeout(resolve, 50)); // Wait for repaint
  },
};

// --- Story 2: Scroll to Bottom ---
export const ScrolledToBottom = {
  render: (args) => <ScrollablePageLayout {...args} />,
  args: { ...LoggedIn.args },
  parameters: { chromatic: { disableSnapshot: false } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const target = await canvas.findByTestId("image-container-6"); // Target last element
    target.scrollIntoView({ behavior: "auto", block: "end" });
    await new Promise((resolve) => setTimeout(resolve, 50));
  },
};

// --- Story 3: Scroll with Top Alignment ---
export const ScrolledWithTopAlignment = {
  render: (args) => <ScrollablePageLayout {...args} />,
  args: { ...LoggedIn.args },
  parameters: { chromatic: { disableSnapshot: false } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const target = await canvas.findByTestId("image-container-4");
    // Aligns the top of the element to the top of the scroll container
    target.scrollIntoView({ behavior: "auto", block: "start" });
    await new Promise((resolve) => setTimeout(resolve, 50));
  },
};

// --- Story 4: Scroll While Logged Out ---
export const ScrolledWhileLoggedOut = {
  render: (args) => <ScrollablePageLayout {...args} />,
  args: { user: null }, // Logged out state
  parameters: { chromatic: { disableSnapshot: false } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const target = await canvas.findByTestId("image-container-3");
    target.scrollIntoView({ behavior: "auto", block: "center" });
    await new Promise((resolve) => setTimeout(resolve, 50));
  },
};

// --- Story 5: Scroll to an Absolute Coordinate ---
export const ScrolledToCoordinate = {
  render: (args) => <ScrollablePageLayout {...args} />,
  args: { ...LoggedIn.args },
  parameters: { chromatic: { disableSnapshot: false } },
  play: async () => {
    // Uses window.scrollTo instead of targeting an element
    window.scrollTo({ top: 1200, behavior: "auto" });
    await new Promise((resolve) => setTimeout(resolve, 50));
  },
};

// --- Story 6: No Scroll on Short Page ---
export const NoScrollOnShortPage = {
  // Renders only 1 image, which is not enough to cause scrolling
  render: (args) => <ScrollablePageLayout imageCount={1} {...args} />,
  args: { ...LoggedIn.args },
  parameters: { chromatic: { disableSnapshot: false } },
  play: async () => {
    // This story should not scroll, we can assert this state.
    expect(window.scrollY).toBe(0);
  },
};

// --- Story 7: Scrolled on a Very Long Page ---
export const ScrolledOnLongPage = {
  // Renders 20 images to ensure a long scroll container
  render: (args) => <ScrollablePageLayout imageCount={20} {...args} />,
  args: { ...LoggedIn.args },
  parameters: { chromatic: { disableSnapshot: false } },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const target = await canvas.findByTestId("image-container-18"); // Target near the bottom
    target.scrollIntoView({ behavior: "auto", block: "center" });
    await new Promise((resolve) => setTimeout(resolve, 50));
  },
};
