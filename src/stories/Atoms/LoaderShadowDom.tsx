import React, { useRef, useEffect } from "react";

/**
 * Advanced Loader that encapsulates its own styles via Shadow DOM.
 * Useful for ensuring styles don't bleed into the host application.
 */
const LoaderShadowDom: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current) return;
    const shadowRoot = loaderRef.current.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.className = "loader";

    const style = document.createElement("style");
    style.textContent = `
      .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #60b2e9;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          animation: spin 1s linear infinite;
      }
      @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(container);
  }, []);

  return <div ref={loaderRef} />;
};

export default LoaderShadowDom;
