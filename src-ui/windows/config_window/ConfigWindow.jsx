import "../../../locales/config.js";
import "@utils/root.css";

import styles from "./ConfigWindow.module.scss";

import { Topbar } from "./topbar/Topbar";
// import { MainSection } from "./main_section/MainSection";

export const ConfigWindow = () => {
    return (
        <div className={styles.container}>
            <Topbar />
            {/* <MainSection /> */}
        </div>
    );
};