import { LoaderOverlay } from "./LoaderOverlay";

export default {
  title: "COMPONENTS/LoaderOverlay",
  component: LoaderOverlay,
  tags: ["autodocs"],
};

export const LoadingDashboard = {
  args: {
    message: "Loading dashboard...",
  },
};

export const UploadInProgress = {
  args: {
    message: "Uploading your files...",
  },
};

export const DataSync = {
  args: {
    message: "Syncing data with server...",
  },
};
