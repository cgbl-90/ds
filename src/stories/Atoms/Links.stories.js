import { expect, userEvent, within } from "storybook/test";
import { action } from "storybook/actions";
import Links from "./Links";

const storyStyles = `
  .storybook-link--disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
  }

  .storybook-link:focus-visible {
    outline: 2px solid dodgerblue;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export default {
  title: "ATOMS/Links",
  component: Links,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    style: {
      control: {
        type: "select",
        options: ["primary", "secondary", "success", "warning", "danger"],
      },
    },
    bold: { control: "boolean" },
    italic: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div>
        <style>{storyStyles}</style>
        <Story />
      </div>
    ),
  ],
};

// --- Base Stories ---
export const Primary = {
  args: {
    text: "Primary Link",
    href: "#",
    style: "primary",
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    text: "Secondary Link",
    style: "secondary",
  },
};

// --- Interaction Stories ---

export const HoverAndFocus = {
  name: "Hover & Focus",
  args: {
    ...Primary.args,
    text: "Hover and Focus Me",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await userEvent.hover(link);
    await userEvent.unhover(link);
    await userEvent.tab();
    await expect(link).toHaveFocus();
  },
};

export const ExternalLink = {
  name: "External Link",
  args: {
    ...Primary.args,
    text: "Opens in new tab",
    href: "https://storybook.js.org",
    target: "_blank",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  },
};

export const DisabledLink = {
  name: "Disabled",
  args: {
    ...Primary.args,
    text: "Disabled Link",
    href: "#",
    className: "storybook-link--disabled",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    const clickAction = action("link-click-attempt");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      clickAction();
    });
    await userEvent.click(link, { skipPointerEventsCheck: true });
    await expect(link).toHaveClass("storybook-link--disabled");
  },
};

export const LinkAsButton = {
  name: "Link as Button",
  args: {
    ...Primary.args,
    text: "Click to trigger action",
    href: "#",
    onClick: action("link-clicked"),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link");
    await userEvent.click(link);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
