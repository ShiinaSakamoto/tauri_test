import React from "react";
import ReactDOM from "react-dom/client";
import "../locales/config.js";
import { App } from "./App";
import "./reset.css";
import "./root.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);