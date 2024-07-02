import { useEffect, useRef } from "react";
import styles from "./App.module.scss";
import { usePythonStart } from "@logic";
import { MainWindow } from "./windows/main_window/MainWindow";
import { SplashWindow } from "./windows/splash_window/SplashWindow";
import { useIsBackendReady } from "@store";

export const App = () => {
    const { asyncPythonStartFunc } = usePythonStart();
    const { currentIsBackendReady } = useIsBackendReady();
    const effectRan = useRef(false);

    useEffect(() => {
        // prevent twice execute initial function when under React Strict mode.
        if (!effectRan.current) {
            asyncPythonStartFunc();
        }

        return () => effectRan.current = true;
    }, []);

    if (currentIsBackendReady === false) {
        return <SplashWindow />;
    } else {
        return (
            <div className={styles.container}>
                <MainWindow />
            </div>
        );
    }
};