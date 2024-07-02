import styles from "./SplashWindow.module.scss";

import { usePythonReadyCount } from "@store";
export const SplashWindow = () => {
    const { currentPythonReadyCount } = usePythonReadyCount();

    return (
        <div className={styles.container}>
            <p className={styles.counter}>{currentPythonReadyCount}</p>
        </div>
    );
};