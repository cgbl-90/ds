import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "storybook/test";
import { GeolocationCard } from "./GeolocationCard";

const meta: Meta<typeof GeolocationCard> = {
  title: "API/Geolocation",
  component: GeolocationCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof GeolocationCard>;

export const Default: Story = {};

export const Success: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Mock Geolocation specifically for this story
    Object.defineProperty(navigator, "geolocation", {
      configurable: true,
      value: {
        getCurrentPosition: (successCallback: PositionCallback) => {
          successCallback({
            coords: {
              latitude: 38.3459,
              longitude: -0.4907,
              accuracy: 0,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              speed: null,
            },
            timestamp: Date.now(),
          } as GeolocationPosition);
        },
      },
    });

    await userEvent.click(canvas.getByRole("button", { name: /get my location/i }));
    await waitFor(() => {
      canvas.getByText(/Latitude: 38.3459, Longitude: -0.4907/i);
    });
  },
};