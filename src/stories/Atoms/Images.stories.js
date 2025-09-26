import { Image } from "./Images.js";
import localImage from "./placeholder.jpeg";

export default {
  title: "ATOMS/Image",
  component: Image,
  // Define argTypes to provide better controls in Storybook's addon panel.
  argTypes: {
    // Creates radio buttons to easily switch image sources.
    src: {
      control: "radio",
      options: {
        Local: localImage,
        "Online (Picsum)": "https://picsum.photos/id/42/800/600",
      },
    },
    // Allows object editing for the `sources` prop, used in the <picture> element.
    sources: { control: "object" },
  },
  parameters: {
    chromatic: { delay: 3000 },
  },
};

// A "template" for args that can be reused and overridden in specific stories.
const baseArgs = {
  alt: "Placeholder image",
  loading: "lazy",
  objectFit: null,
  aspectRatio: null,
  srcSet: "",
  sizes: "",
  sources: [],
};

/**
 * ### Default Story
 * This is the standard story that showcases the Image component.
 * All props are available to be manipulated in the Controls panel.
 */
export const Default = {
  args: {
    ...baseArgs,
    src: localImage,
    size: "medium",
    alt: "Default image",
  },
};

/**
 * ### Sizing
 * The `size` prop controls the dimensions of the image.
 * Options include `small`, `medium`, `large`, and `responsive`.
 */
export const Small = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/200/300",
    size: "small",
    alt: "Small 100x100px image",
  },
};

export const Medium = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/200/300",
    size: "medium",
    alt: "Medium 200x200px image",
  },
};

export const Large = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/200/300",
    size: "large",
    alt: "Large 300x300px image",
  },
};

/**
 * ### Optimization: Responsive Images (`srcset`)
 * Use `srcset` and `sizes` to serve appropriately-sized images based on screen resolution and viewport size.
 * This ensures high-resolution screens get crisp images without forcing low-resolution devices to download unnecessarily large files.
 */
export const ResponsiveSrcSet = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/id/20/400/400", // Fallback for older browsers
    alt: "A responsive image using srcset",
    size: "responsive", // Makes the image take up 100% of its container width
    srcSet:
      "https://picsum.photos/id/20/400/400 400w, https://picsum.photos/id/20/800/800 800w, https://picsum.photos/id/20/1200/1200 1200w",
    sizes: "100vw", // This tells the browser the image will be 100% of the viewport width.
  },
};

/**
 * ### Optimization: Art Direction (`<picture>`)
 * The `<picture>` element provides more direct control over which image to display using media queries.
 * This is ideal for "art direction," where a different crop or composition works better on mobile vs. desktop.
 */
export const ArtDirection = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/id/30/800/400", // Default wide image
    alt: "An image with art direction",
    size: "responsive",
    sources: [
      // If the viewport is 600px or less, use the tall image.
      {
        media: "(max-width: 600px)",
        srcset: "https://picsum.photos/id/30/400/800",
      },
    ],
  },
};

/**
 * ### Optimization: Next-Gen Formats (WebP)
 * Serve modern image formats like WebP or AVIF for better compression.
 * The `<picture>` element is perfect for providing a WebP source with a fallback for browsers that don't support it.
 */
export const NextGenFormat = {
  args: {
    ...baseArgs,
    src: "https://www.gstatic.com/webp/gallery/4.jpg", // Fallback JPEG
    alt: "An image using WebP with a JPEG fallback",
    size: "large",
    sources: [
      {
        srcset: "https://www.gstatic.com/webp/gallery/4.webp",
        type: "image/webp",
      },
    ],
  },
};

/**
 * ### Layout: Aspect Ratio
 * Setting `aspect-ratio` reserves space for the image before it loads, preventing Cumulative Layout Shift (CLS).
 */
export const AspectRatio = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/id/50/800/600",
    alt: "An image with a defined aspect ratio",
    size: "responsive",
    aspectRatio: "800 / 600", // Browser reserves a 4:3 space
  },
};

/**
 * ### Layout: `object-fit: contain`
 * `contain` ensures the entire image is visible within the component's dimensions without being cropped or stretched.
 * A background color is added in the CSS to make the effect clear.
 */
export const ObjectFitContain = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/id/60/800/400", // A wide image
    alt: "Image with object-fit: contain",
    size: "large", // The wide image is contained within the 300x300px container
    objectFit: "contain",
  },
};

/**
 * ### Layout: `object-fit: cover`
 * `cover` scales the image to fill the container, cropping it if necessary while maintaining the aspect ratio.
 */
export const ObjectFitCover = {
  args: {
    ...baseArgs,
    src: "https://picsum.photos/id/70/400/800", // A tall image
    alt: "Image with object-fit: cover",
    size: "large", // The tall image is cropped to cover the 300x300px container
    objectFit: "cover",
  },
};
