import { useEffect, useRef } from "react";
import styles from "./App.module.scss";

import { asyncPythonStartFunc } from "@logic";
import { MainWindow } from "./windows/main_window/MainWindow";

// import { useWindow } from "@utils/useWindow";

export const App = () => {
    const effectRan = useRef(false);
    // const { createSecondWindow } = useWindow();

    useEffect(() => {
        // prevent twice execute initial function when under React Strict mode.
        if (!effectRan.current) {
            asyncPythonStartFunc();
            // createSecondWindow();
        }

        return () => effectRan.current = true;

    }, []);

    return (
        <div className={styles.container}>
            <MainWindow />
        </div>
    );
};