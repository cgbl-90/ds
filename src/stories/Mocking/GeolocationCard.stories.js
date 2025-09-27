import { within, userEvent, waitFor } from "storybook/test";
import { GeolocationCard } from "./GeolocationCard";

export default {
  title: "API/Geolocation",
  component: GeolocationCard,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <GeolocationCard {...args} />;

export const Default = Template.bind({});
Default.storyName = "1. Default State";

export const Success = Template.bind({});
Success.storyName = "2. Success";
Success.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Mock the Geolocation API for a successful response
  Object.defineProperty(navigator, "geolocation", {
    configurable: true,
    value: {
      getCurrentPosition: (successCallback) => {
        successCallback({
          coords: {
            latitude: 38.3459, // Approx. Alicante
            longitude: -0.4907,
          },
        });
      },
    },
  });

  await userEvent.click(
    canvas.getByRole("button", { name: /get my location/i })
  );
  await waitFor(() => {
    canvas.getByText(/Latitude: 38.3459, Longitude: -0.4907/i);
  });
};

export const PermissionDenied = Template.bind({});
PermissionDenied.storyName = "3. Permission Denied";
PermissionDenied.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Mock the Geolocation API for a permission denied error
  Object.defineProperty(navigator, "geolocation", {
    configurable: true,
    value: {
      getCurrentPosition: (successCallback, errorCallback) => {
        errorCallback({
          code: 1, // PERMISSION_DENIED
          message: "User denied Geolocation",
        });
      },
    },
  });

  await userEvent.click(
    canvas.getByRole("button", { name: /get my location/i })
  );
  await waitFor(() => {
    canvas.getByText(/Error: User denied Geolocation/i);
  });
};

export const Unsupported = Template.bind({});
Unsupported.storyName = "4. API Not Supported";
Unsupported.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Mock the Geolocation API to be unsupported by the browser
  Object.defineProperty(navigator, "geolocation", {
    configurable: true,
    value: undefined,
  });

  await userEvent.click(
    canvas.getByRole("button", { name: /get my location/i })
  );
  await waitFor(() => {
    canvas.getByText(/Geolocation is not supported by your browser/i);
  });
};

export const Loading = Template.bind({});
Loading.storyName = "5. Loading State";
Loading.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Mock a slow response that never resolves
  Object.defineProperty(navigator, "geolocation", {
    configurable: true,
    value: {
      getCurrentPosition: () => {
        // Intentionally do nothing to simulate a pending state
      },
    },
  });

  await userEvent.click(
    canvas.getByRole("button", { name: /get my location/i })
  );
  await waitFor(() => {
    canvas.getByText(/Status: Fetching.../i);
  });
};
