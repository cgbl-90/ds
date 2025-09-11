import { Image } from "./Images.js";
import localImage from "./placeholder.jpeg";

export default {
  title: "ATOMS/Image",
  component: Image,
};

const onlineImageUrl = "https://picsum.photos/200/300";

export const SmallOnline = {
  args: {
    src: onlineImageUrl,
    alt: "Small Online Image",
    size: "small",
  },
};

export const MediumOnline = {
  args: {
    src: onlineImageUrl,
    alt: "Medium Online Image",
    size: "medium",
  },
};

export const LargeOnline = {
  args: {
    src: onlineImageUrl,
    alt: "Large Online Image",
    size: "large",
  },
};

export const SmallLocal = {
  args: {
    src: localImage,
    alt: "Small Local Image",
    size: "small",
  },
};

export const MediumLocal = {
  args: {
    src: localImage,
    alt: "Medium Local Image",
    size: "medium",
  },
};

export const LargeLocal = {
  args: {
    src: localImage,
    alt: "Large Local Image",
    size: "large",
  },
};

/**
 * 1. Lazy Loading:
 * The `loading="lazy"` attribute tells the browser to defer loading of off-screen images
 * until the user scrolls near them. This is the easiest and most effective way to improve
 * performance and reduce initial page load time.
 */
export const LazyLoaded = {
  name: "Lazy Loading",
  args: {
    src: "https://picsum.photos/id/10/800/800",
    alt: "A large, lazy-loaded image",
    size: "large",
    loading: "lazy",
  },
};

/**
 * 2. Responsive Images with `srcset`:
 * The `srcset` attribute allows you to provide a list of image sources for the browser to choose from,
 * based on the device's screen resolution and size. The `sizes` attribute tells the browser how wide
 * the image will be at different viewport sizes. This ensures high-resolution screens get crisp images
 * without forcing low-resolution devices to download unnecessarily large files.
 */
export const ResponsiveSrcSet = {
  name: "Responsive Images (srcset)",
  args: {
    // A default `src` is still required for older browsers.
    src: "https://picsum.photos/id/20/400/400",
    alt: "A responsive image using srcset",
    // `size` is set to responsive to make the image take up 100% of its container width.
    size: "responsive",
    // Here we define image sources and their intrinsic widths (e.g., '.../400 400w').
    srcSet:
      "https://picsum.photos/id/20/400/400 400w, https://picsum.photos/id/20/800/800 800w, https://picsum.photos/id/20/1200/1200 1200w",
    // This tells the browser the image will be 100% of the viewport width. Adjust as needed.
    sizes: "100vw",
  },
};

/**
 * 3. Art Direction with `<picture>`:
 * The `<picture>` element allows for more direct control over which image displays. You can use
 * media queries to serve completely different images based on viewport size. This is ideal for
 * "art direction," where a different crop or composition works better on mobile vs. desktop.
 */
export const ArtDirectionPicture = {
  name: "Art Direction (<picture>)",
  args: {
    // The `<img>` inside `<picture>` is the default fallback.
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
 * 4. Next-Gen Formats (WebP) with Fallback:
 * Modern image formats like WebP or AVIF offer better compression than JPEG/PNG, leading to smaller
 * file sizes and faster loads. The `<picture>` element is perfect for providing a WebP source
 * while including a fallback (like JPEG) for browsers that don't support it.
 */
export const NextGenFormat = {
  name: "Next-Gen Format (WebP)",
  args: {
    // The fallback JPEG for older browsers.
    src: "https://www.gstatic.com/webp/gallery/4.jpg",
    alt: "An image using WebP with a JPEG fallback",
    size: "large",
    sources: [
      // Browsers that support WebP will download and display this version.
      {
        srcset: "https://www.gstatic.com/webp/gallery/4.webp",
        type: "image/webp",
      },
    ],
  },
};

/**
 * 5. Aspect Ratio for Preventing Layout Shift:
 * When an image loads, it can cause the content below it to "jump" down, which is called
 * Cumulative Layout Shift (CLS). By setting the `aspect-ratio` CSS property on the image,
 * the browser reserves the correct amount of space for the image before it even loads,
 * preventing any layout shift.
 */
export const AspectRatio = {
  name: "Aspect Ratio (No Layout Shift)",
  args: {
    src: "https://picsum.photos/id/50/800/600",
    alt: "An image with a defined aspect ratio",
    size: "responsive",
    // The browser will reserve a space with a 4:3 aspect ratio.
    aspectRatio: "800 / 600",
  },
};

/**
 * 6. CSS Object-Fit for Sizing Control:
 * The `object-fit` property controls how an `<img>`'s content responds to the height/width
 * of its container. `contain` ensures the entire image is visible without being cropped or
 * stretched. `cover` scales the image to fill the container, cropping it if necessary.
 */
export const ObjectFitContain = {
  name: "Sizing with object-fit (Contain)",
  args: {
    src: "https://picsum.photos/id/60/800/400", // A wide image
    alt: "Image with object-fit: contain",
    // The container is 300px tall (from CSS), but the image will be scaled down to fit inside.
    size: "responsive",
    objectFit: "contain",
  },
};

export const ObjectFitCover = {
  name: "Sizing with object-fit (Cover)",
  args: {
    src: "https://picsum.photos/id/70/400/800", // A tall image
    alt: "Image with object-fit: cover",
    // The image is scaled up and cropped to cover the 300px tall container.
    size: "responsive",
    objectFit: "cover",
  },
};
