import React, { useRef, useEffect } from 'react';

// Define the custom element
class ShadowButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Create the button
    const button = document.createElement("button");
    button.textContent = this.getAttribute("label") || "Default Label";

    // Apply styles
    button.style.backgroundColor = this.getAttribute("background-color") || "blue";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.cursor = "pointer";

    // Add a class to ignore in Chromatic
    button.classList.add("chromatic-ignore");

    // Add click event listener
    button.addEventListener("click", () => {
      const clickEvent = new CustomEvent("button-click", {
        detail: { label: button.textContent },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(clickEvent);
    });

    shadow.appendChild(button);
  }
}

// Register the custom element
if (typeof window !== 'undefined' && !customElements.get("shadow-button")) {
  customElements.define("shadow-button", ShadowButton);
}

// Define props for the React component
interface ShadowButtonComponentProps {
  label: string;
  backgroundColor?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const ShadowButtonComponent: React.FC<ShadowButtonComponentProps> = ({
  label,
  backgroundColor,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (!buttonElement || !onClick) return;

    const handleButtonClick = (event: Event) => {
      // Call the onClick handler if provided
      onClick(event as unknown as React.MouseEvent<HTMLElement>);
    };

    // Listen for the custom event and also handle regular click
    buttonElement.addEventListener('button-click', handleButtonClick);
    buttonElement.addEventListener('click', handleButtonClick);

    return () => {
      buttonElement.removeEventListener('button-click', handleButtonClick);
      buttonElement.removeEventListener('click', handleButtonClick);
    };
  }, [onClick]);

  return React.createElement('shadow-button', {
    ref: buttonRef,
    label,
    'background-color': backgroundColor,
    ...props,
  });
};