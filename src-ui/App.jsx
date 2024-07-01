import { useEffect } from "react";
import styles from "./App.module.scss";

import { asyncPythonStartFunc } from "@logic";
import { MainWindow } from "./windows/main_window/MainWindow";

export const App = () => {
    useEffect(() => {
        asyncPythonStartFunc();
    }, []);

    return (
        <div className={styles.container}>
            <MainWindow />
        </div>
    );
};