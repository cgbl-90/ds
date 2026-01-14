import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    objectFit: {
      control: "select",
      options: ["cover", "contain", "fill", "none", "scale-down"],
      description: "How the image should be resized to fit its container",
    },
    variant: {
      control: "select",
      options: ["rounded", "circle"],
      description: "The shape of the image borders",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Basic Stories ---

export const LocalImage: Story = {
  args: {
    src: "/ny.jpg",
    alt: "New York skyline",
    width: "400px",
  },
};

export const Rounded: Story = {
  args: {
    src: "https://picsum.photos/id/10/400/300",
    variant: "rounded",
    alt: "Image with rounded corners",
    width: "400px",
    height: "300px",
  },
};

export const Circle: Story = {
  args: {
    src: "https://picsum.photos/id/1025/300/300",
    variant: "circle",
    alt: "Circular image",
    width: "200px",
    height: "200px",
  },
};

// --- Advanced Stories ---

/**
 * Uses React hooks to handle dynamic data.
 * In SB 9/10, we encapsulate logic in an internal component for safety.
 */
export const FetchedFromAPI: Story = {
  args: {
    src: "", // Placeholder for TypeScript requirements
    alt: "Loading...",
    width: "400px",
    variant: "rounded",
  },
  render: (args) => {
    // Internal component ensures hooks like useEffect work properly
    const ImageWithFetch = () => {
      const [data, setData] = useState<{ url: string; author: string } | null>(
        null
      );

      useEffect(() => {
        let isMounted = true;
        fetch("https://picsum.photos/v2/list?limit=1")
          .then((res) => res.json())
          .then((json) => {
            if (isMounted) {
              setData({ url: json[0].download_url, author: json[0].author });
            }
          })
          .catch((err) => console.error("Error fetching image:", err));

        return () => {
          isMounted = false;
        };
      }, []);

      return (
        <div style={{ textAlign: "center" }}>
          <Image
            {...args}
            src={
              data?.url || "https://via.placeholder.com/400x300?text=Loading..."
            }
            alt={data ? `Photo by ${data.author}` : "Loading..."}
          />
          {data && (
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#666" }}>
              Photo by: <strong>{data.author}</strong>
            </p>
          )}
        </div>
      );
    };

    return <ImageWithFetch />;
  },
};

/** * Demonstrates the image against a dark background using Decorators.
 */
export const DarkModeComparison: Story = {
  args: {
    src: "https://picsum.photos/id/20/400/300",
    alt: "Contrast test image",
    width: "400px",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#333",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
