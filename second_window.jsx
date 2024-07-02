import React from "react";
import ReactDOM from "react-dom/client";
// import "../locales/config.js";
// import { App } from "./App";
// import "./reset.css";
// import "./root.css";
// import { useWindow } from "@utils/useWindow";

const App = () => {
    return (
        <div>Secondly window div</div>
    );
};


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

