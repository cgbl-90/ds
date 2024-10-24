// ButtonShadow.jsx
class ShadowButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Create the button
    const button = document.createElement("button");
    button.textContent = this.getAttribute("label") || "Default Label";

    // Apply styles
    button.style.backgroundColor =
      this.getAttribute("background-color") || "blue";
    button.style.color = "white";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.cursor = "pointer";

    // Add a class to ignore in Chromatic
    button.classList.add("chromatic-ignore"); // Add the ignore class

    // Add click event listener
    button.addEventListener("click", () => {
      const clickEvent = new CustomEvent("button-click", {
        detail: { label: button.textContent },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(clickEvent); // Emit the event
    });

    shadow.appendChild(button);
  }
}

// Register the custom element
customElements.define("shadow-button", ShadowButton);

// Export a function for usage in Storybook
export const ShadowButtonComponent = (props) => {
  return (
    <shadow-button
      label={props.label}
      background-color={props.backgroundColor}
      onClick={props.onClick}
    ></shadow-button>
  );
};
