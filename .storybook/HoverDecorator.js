import React from "react";

export const hoverdecorator = (dataTestId) => (Story) => {
  const WrappedStory = (context) => {
    Story.play = async ({ canvasElement, args }) => {
      const canvas = within(canvasElement);
      const element = canvas.getByTestId(dataTestId);
      await userEvent.hover(element);
      await new Promise((resolve) => setTimeout(resolve, 500));
      await userEvent.unhover(element);
    };
    return <Story {...context} />;
  };

  return WrappedStory;
};
