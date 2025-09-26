import React, { useRef, useEffect } from "react";
import "./loader.css"; // Ensure this file contains the loader styles

const LoaderShadowDom = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const shadowRoot = loaderRef.current.attachShadow({ mode: "open" });
    const loader = document.createElement("div");
    loader.className = "loader";

    const style = document.createElement("style");
    style.textContent = `
      .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #10669f;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
      }

      @keyframes spin {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(loader);
  }, []);

  return <div ref={loaderRef} />;
};

export default LoaderShadowDom;
