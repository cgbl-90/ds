import type { Meta, StoryObj } from "@storybook/react";
import { LoaderOverlay } from "./LoaderOverlay";

const meta = {
  title: "COMPONENTS/LoaderOverlay",
  component: LoaderOverlay,
  tags: ["autodocs"],
} satisfies Meta<typeof LoaderOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Typical usage for initial application or dashboard loading states */
export const LoadingDashboard: Story = {
  args: { message: "Loading dashboard..." },
};

/** Feedback during long-running file upload processes */
export const UploadInProgress: Story = {
  args: { message: "Uploading your files..." },
};

/** Used when fetching background updates or syncing local data */
export const DataSync: Story = {
  args: { message: "Syncing data with server..." },
};