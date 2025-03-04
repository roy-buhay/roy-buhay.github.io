import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./context/ModalContext.js";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>
);
