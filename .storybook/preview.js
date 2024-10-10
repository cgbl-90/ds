import React from "react"; 
import { hoverdecorator } from "./HoverDecorator";

const preview = {
  decorators: [
    (Story, context) => {
      const shouldApplyHover = context.args.hoverDecorator; 
      const dataTestId = context.args.dataTestId || "default"; 
      if (shouldApplyHover) {
        return hoverdecorator(dataTestId)(Story)(context); 
      }
      return <Story {...context} />;
    }
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
