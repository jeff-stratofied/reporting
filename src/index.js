// src/index.js  (or index.jsx)

// 1. Import React first (needed for JSX)
import React from "react";

// 2. Import ReactDOM (this defines ReactDOM)
import { createRoot } from "react-dom/client";

// 3. Import your main App component
import App from "./App";

// 4. Import DevExtreme theme (keep this)
import "devextreme/dist/css/dx.light.css";

// Optional: your custom styles if you have any
// import './styles.css';  // uncomment only if the file exists

// 5. Get the root element from HTML
const rootElement = document.getElementById("root");

// 6. Create root and render
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
