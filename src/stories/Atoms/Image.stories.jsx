import { useState, useEffect } from "react";
import { Image } from "./Image.jsx";

export default {
  title: "Atoms/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: [null, "rounded", "circle"],
      },
    },
    objectFit: {
      control: {
        type: "select",
        options: ["cover", "contain", "fill", "none", "scale-down"],
      },
    },
    width: { control: "text" },
    height: { control: "text" },
  },
};

// --- STORY EXAMPLES ---

// 1. Local Image
export const LocalImage = {
  args: {
    src: "/ny.jpg",
    alt: "A view of the New York skyline",
    width: "400px",
  },
};

// 2. Mock Image with Specific Dimensions
export const MockSpecificDimensions = {
  args: {
    src: "https://via.placeholder.com/300x150",
    alt: "A 300x150 placeholder image",
    width: "300px",
    height: "150px",
  },
};

// 3. Rounded Variant
export const Rounded = {
  args: {
    src: "https://picsum.photos/id/10/400/300",
    alt: "A random image from Picsum",
    variant: "rounded",
    width: "400px",
    height: "300px",
  },
};

// 4. Circle Variant
export const Circle = {
  args: {
    src: "https://picsum.photos/id/1025/300/300",
    alt: "A dog",
    variant: "circle",
    width: "300px",
    height: "300px",
  },
};

// 5. Object Fit 'Contain'
export const ObjectFitContain = {
  args: {
    src: "https://picsum.photos/id/106/400/200",
    alt: "A landscape image",
    objectFit: "contain",
    width: "400px",
    height: "300px",
    style: { backgroundColor: "#e0f7fa" },
  },
};

// 6. Object Fit 'Cover'
export const ObjectFitCover = {
  args: {
    src: "https://picsum.photos/id/106/400/200",
    alt: "A landscape image, cropped to fit",
    objectFit: "cover",
    width: "400px",
    height: "300px",
  },
};

// 7. Grayscale Image
export const Grayscale = {
  args: {
    src: "https://picsum.photos/id/219/400/300?grayscale",
    alt: "A grayscale image of a book",
    width: "400px",
    height: "300px",
  },
};

// 8. Blurred Image
export const Blurred = {
  args: {
    src: "https://picsum.photos/id/237/400/300?blur=2",
    alt: "A blurred image of a puppy",
    width: "400px",
    height: "300px",
  },
};

// 9. Broken Image Link
export const BrokenLink = {
  args: {
    src: "https://example.com/non-existent-image.jpg",
    alt: "This is the alt text for a broken image.",
    width: "400px",
    height: "300px",
  },
};

// 10. Fetched from an API
const FetchedImageTemplate = (args) => {
  const [imageUrl, setImageUrl] = useState(
    "https://via.placeholder.com/400x300.png?text=Loading..."
  );
  // CORRECTED: This now correctly destructures the state variable and setter.
  const [altText, setAltText] = useState("Loading image...");

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=1")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          // CORRECTED: Access the first item in the returned array.
          const imageInfo = data[0];
          const sizedUrl = `https://picsum.photos/id/${imageInfo.id}/400/300`;
          setImageUrl(sizedUrl);
          setAltText(`A photograph by ${imageInfo.author}`);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch image:", error);
        setImageUrl(
          "https://via.placeholder.com/400x300.png?text=Error+Loading"
        );
        setAltText("Error loading image");
      });
  }, []); // CORRECTED: Removed trailing comma

  return <Image {...args} src={imageUrl} alt={altText} />;
};

export const FetchedFromAPI = {
  render: FetchedImageTemplate,
  args: {
    width: "400px",
    height: "300px",
    variant: "rounded",
  },
};

// 11. New Story: Attempt to fetch from an invalid Google content URL
export const InvalidUrl = {
  name: "Attempt Fetch From Invalid URL",
  args: {
    src: "https://photos.google.com/share/AF1QipObL1ih7W6insIC17nFzjz7Pbl5d6c787VmVRpWyPDMPzcdqk0nn5QnR48RuRSnIg?key=dHJvLUdITk1EZkFoN3lKSzItaV9ySUJLY3VMNHJR",
    alt: "This alt text displays because the image source is not a valid image file.",
    width: "400px",
    height: "300px",
  },
};
