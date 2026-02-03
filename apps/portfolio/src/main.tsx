import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ui-styles.css";
import "./index.css";
import App from "./App";

// Инициализация i18n
import "./lib/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
