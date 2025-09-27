import { StickyHeaderPage } from "./StickyHeaderPage";
import { Header } from "./Header"; // Assuming Header is in the same directory
import { Typography } from "../Atoms/Typography";
import { action } from "storybook/actions";
import { within, waitFor, expect } from "storybook/test";

export default {
  title: "PAGES/StickyHeaderPage",
  component: StickyHeaderPage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "customLarge",
      viewports: {
        customLarge: {
          name: "Custom 1200x900",
          styles: {
            width: "1200px",
            height: "900px",
          },
          type: "desktop",
        },
      },
    },
  },
  args: {
    onLogin: action("Login clicked"),
    onLogout: action("Logout clicked"),
    onCreateAccount: action("Sign up clicked"),
  },
};

// --- Original Stories ---

export const LoggedIn = {
  args: {
    user: {
      name: "Jhonny Bravo",
    },
  },
};

export const LoggedOut = {};

export const InteractionScroll = {
  args: {
    user: {
      name: "Jhonny Bravo",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => canvas.getByText("Here’s an interaction section 🧩"));
    window.scrollTo({ top: 800, behavior: "smooth" });
    await new Promise((res) => setTimeout(res, 800));
  },
};

// --- New Scroll Interaction Stories ---

/**
 * A helper component for the new stories.
 * It renders the sticky Header and a list of 10 images to create a long, scrollable page.
 */
const ScrollablePageWithImages = (args) => (
  <div>
    <div className="sticky-header">
      <Header {...args} />
    </div>
    <div className="content">
      <Typography type="title" label="Scroll Demo with Images" />
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          // Add a test ID to the 9th image to target it for scrolling
          data-testid={i === 8 ? "target-image-element" : undefined}
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

/**
 * This story demonstrates scrolling to a specific coordinate using `window.scrollTo()`.
 * The play function automatically scrolls the page down to a fixed point.
 */
export const ScrollToCoordinate = {
  args: {
    ...LoggedIn.args, // Reuses args from the LoggedIn story
  },
  render: (args) => <ScrollablePageWithImages {...args} />,
  decorators: [
    (Story) => (
      <div style={{ height: "600px" }}>
        <Story />
      </div>
    ),
  ],
  play: async () => {
    // Wait for a moment to ensure the content has rendered
    await new Promise((res) => setTimeout(res, 500));
    // Scroll to a specific Y-coordinate (1200px from the top)
    await waitFor(() => window.scrollTo({ top: 1200, behavior: "smooth" }));
    // Wait for the smooth scroll animation to complete
    await new Promise((res) => setTimeout(res, 1000));
  },
};

/**
 * This story demonstrates scrolling a specific element into view using `scrollIntoView()`.
 * The play function finds the 9th image and scrolls until it is centered in the viewport.
 */
export const ScrollIntoView = {
  args: {
    ...LoggedIn.args, // Reuses args from the LoggedIn story
  },
  render: (args) => <ScrollablePageWithImages {...args} />,
  decorators: [
    (Story) => (
      <div style={{ height: "600px" }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Find the target element using its data-testid
    const targetImage = await canvas.findByTestId("target-image-element");
    await expect(targetImage).toBeInTheDocument();
    // Scroll the element's ancestor container to bring the element into view
    targetImage.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    // Wait for the smooth scroll animation to complete
    await new Promise((res) => setTimeout(res, 1000));
  },
};
