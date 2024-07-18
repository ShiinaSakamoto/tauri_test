import { useEffect, useRef } from "react";
import styles from "./MainWindow.module.scss";
import { SidebarSection } from "./sidebar_section/SidebarSection";
import { MainSection } from "./main_section/MainSection";
import { useStartPython } from "@logics/useStartPython";

export const MainWindow = () => {
    const { asyncStartPython } = useStartPython();
    const hasRunRef = useRef(false);

    useEffect(() => {
        if (!hasRunRef.current) {
            asyncStartPython();
        }
        return () => hasRunRef.current = true;
    }, []);

    return (
        <div className={styles.container}>
            <SidebarSection />
            <MainSection />
        </div>
    );
};