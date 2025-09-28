import SecondPage from "./SecondPage"; //
export default {
  title: "PAGES/Page",
  component: SecondPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => <SecondPage />;
