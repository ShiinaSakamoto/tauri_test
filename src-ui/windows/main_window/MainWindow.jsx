import styles from "./MainWindow.module.scss";

import { SidebarSection } from "./sidebar_section/SidebarSection";
import { MainSection } from "./main_section/MainSection";

import { useWindow } from "@utils/useWindow";

export const MainWindow = () => {
    const { setMainWindowPosition } = useWindow();
    setMainWindowPosition();
    return (
        <div className={styles.container}>
            <SidebarSection />
            <MainSection />
        </div>
    );
};