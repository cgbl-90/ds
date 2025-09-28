import React, { useState, useRef, useEffect } from "react";
import { ImageScroll } from "./ImageScroll.jsx";
import { Image } from "../Atoms/Image.jsx"; 

// --- Mock Data ---
const mockImages = Array.from({ length: 10 }, (_, i) => ({
  src: `https://picsum.photos/id/${10 + i}/300/200`,
  alt: `A random landscape image ${i + 1}`,
  width: "200px",
  height: "150px",
  objectFit: "cover",
  variant: "rounded",
}));

export default {
  title: "Components/ImageScroll",
  component: ImageScroll,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    images: { control: "object" },
    direction: { control: "radio", options: ["horizontal", "vertical"] },
  },
};

// --- STORIES ---

// 1. Default State
export const Default = {
  args: {
    images: mockImages,
  },
};

// 2. Scroll to Final Image
export const ScrollToFinalImage = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector(".image-scroll-container");
    if (container) {
      setTimeout(() => {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      }, 500);
    }
  },
};

// 3. Hover to Enlarge
export const HoverToEnlarge = {
  name: "Hover Over Image To Enlarge",
  args: {
    ...Default.args,
    className: "hover-effect",
  },
};

// 4. Click to Highlight
const ClickableTemplate = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // We pass children to ImageScroll to override its default rendering
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
          {/* Now this correctly refers to your React component */}
          <Image {...image} />
        </div>
      ))}
    </ImageScroll>
  );
};

export const ClickToHighlight = {
  name: "Highlight Image When Clicked",
  render: ClickableTemplate,
  args: {
    images: mockImages, // Pass images to the template via args
  },
};

// 5. Other: Vertical Scroll
export const VerticalScroll = {
  name: "Other: Vertical Scroll",
  args: {
    images: mockImages.map((img) => ({
      ...img,
      width: "180px",
      height: "120px",
    })),
    direction: "vertical",
  },
};
