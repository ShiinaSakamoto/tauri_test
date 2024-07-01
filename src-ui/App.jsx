import { useEffect, useRef } from "react";
import styles from "./App.module.scss";

import { asyncPythonStartFunc } from "@logic";
import { MainWindow } from "./windows/main_window/MainWindow";

export const App = () => {
    const effectRan = useRef(false);

    useEffect(() => {
        // prevent twice execute initial function when under React Strict mode.
        if (!effectRan.current) {
            asyncPythonStartFunc();
        }

        return () => effectRan.current = true;
    }, []);

    return (
        <div className={styles.container}>
            <MainWindow />
        </div>
    );
};