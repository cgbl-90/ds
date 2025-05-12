import Loader from "./Loader";
import LoaderShadowDom from "./LoaderShadowDom";

export default {
  title: "Atoms/Loader",
  component: Loader,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: false,
      disableSnapshot: true,
    },
  },
};

const Template = () => <Loader />;

export const Default = Template.bind({});
Default.args = {};

// Adding story for LoaderShadowDom
const ShadowDomTemplate = () => <LoaderShadowDom />;

export const ShadowDom = ShadowDomTemplate.bind({});
ShadowDom.args = {};
