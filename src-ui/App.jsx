import styles from "./App.module.scss";

import { asyncPythonStartFunc } from "@logic";
import { MainWindow } from "./windows/main_window/MainWindow";

asyncPythonStartFunc();

export const App = () => {
    return (
        <div className={styles.container}>
            <MainWindow />
        </div>
    );
};