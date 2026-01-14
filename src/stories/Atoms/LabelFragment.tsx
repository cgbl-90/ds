import React from "react";

/**
 * Interface for LabelFragments props.
 * Defining this here allows Storybook to automatically build the controls table.
 */
export interface LabelFragmentsProps {
  /** The text content to render within the fragment */
  text: string;
}

/**
 * A simple utility component to test React Fragment rendering.
 * It renders raw text without a wrapper <div> or <span>.
 */
export const LabelFragments: React.FC<LabelFragmentsProps> = ({
  text = "Fragment Label",
}) => {
  return <>{text}</>;
};
