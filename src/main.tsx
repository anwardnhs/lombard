import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./design-system.css";
import "./institutional.css";
import "./concise-layout.css";

createRoot(document.getElementById("root")!).render(<App />);
