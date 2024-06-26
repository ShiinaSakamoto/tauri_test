import styles from "./MainWindow.module.scss";

import { SidebarSection } from "./sidebar_section/SidebarSection";
import { MainSection } from "./main_section/MainSection";

export const MainWindow = () => {
    return (
        <div className={styles["container"]}>
            <SidebarSection />
            <MainSection />
        </div>
    );
}