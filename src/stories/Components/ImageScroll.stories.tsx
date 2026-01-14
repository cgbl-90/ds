import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ImageScroll } from "./ImageScroll";
import { ImageProps } from "../Atoms/Image";

const mockImages: ImageProps[] = Array.from({ length: 10 }, (_, i) => ({
  src: `https://picsum.photos/id/${10 + i}/300/200`,
  alt: `Landscape image ${i + 1}`,
  width: "200px",
  height: "150px",
  objectFit: "cover",
  variant: "rounded",
}));

const meta = {
  title: "Components/ImageScroll",
  component: ImageScroll,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "radio", options: ["horizontal", "vertical"] },
  },
} satisfies Meta<typeof ImageScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard horizontal scroll */
export const Default: Story = {
  args: { images: mockImages },
};

/** * Automatically scrolls to the end of the gallery.
 * Demonstrates the use of the Storybook 'play' function.
 */
export const ScrollToFinalImage: Story = {
  args: { ...Default.args },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector(".image-scroll-container");
    if (container) {
      setTimeout(() => {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      }, 500);
    }
  },
};

/** Interactive Highlight: Click an image to see the active border effect */
export const ClickToHighlight: Story = {
  render: (args) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    return (
      <ImageScroll {...args}>
        {args.images.map((image, index) => (
          <div
            key={index}
            className={`image-scroll-item-wrapper ${
              selectedIndex === index ? "highlighted" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <img {...image} className="storybook-image" />
          </div>
        ))}
      </ImageScroll>
    );
  },
  args: { images: mockImages },
};

/** Stacked images for sidebar or mobile views */
export const VerticalScroll: Story = {
  args: {
    images: mockImages.map((img) => ({
      ...img,
      width: "180px",
      height: "120px",
    })),
    direction: "vertical",
  },
};

/** Subtle enlargement effect on hover for better focus */
export const HoverToEnlarge: Story = {
  args: {
    ...Default.args,
    className: "hover-effect",
  },
};
