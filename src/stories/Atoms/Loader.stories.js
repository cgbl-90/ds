import Loader from "./Loader";
import LoaderShadowDom from "./LoaderShadowDom";

export default {
  title: "Atoms/Loader",
  component: Loader,
  parameters: {
    // Overrides the default behavior and pauses the animation at the first frame at the component level for all stories.
    chromatic: { pauseAnimationAtEnd: false },
  },
};

const Template = () => <Loader />;

export const Default = Template.bind({});
Default.args = {};

export const LoaderWith1Repetition = () => (
  <Loader style={{ animationIterationCount: 1 }} />
);

// Adding story for LoaderShadowDom
const ShadowDomTemplate = () => <LoaderShadowDom />;

export const ShadowDom = ShadowDomTemplate.bind({});
ShadowDom.args = {};
