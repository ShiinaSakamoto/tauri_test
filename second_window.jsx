import React from "react";
import ReactDOM from "react-dom/client";
// import "../locales/config.js";
// import { App } from "./App";
// import "./reset.css";
// import "./root.css";
// import { useWindow } from "@utils/useWindow";
import { getCurrent } from "@tauri-apps/api/window";
import { emit, listen } from '@tauri-apps/api/event';

const App = () => {
    const webview = getCurrent();
    const onClickCloseWindowButton = () => {
        emit("onCloseRequested");
        webview.close();
    };
    return (
        <div style={ {padding: 10, backgroundColor: "gray"} } onClick={onClickCloseWindowButton}>Close button</div>
    );
};


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

