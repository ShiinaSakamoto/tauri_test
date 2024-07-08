import { useEffect, useRef } from "react";
import styles from "./MainWindow.module.scss";
import { SidebarSection } from "./sidebar_section/SidebarSection";
import { MainSection } from "./main_section/MainSection";
import { usePython } from "@logics/usePython";

export const MainWindow = () => {
    const { asyncPythonStartFunc } = usePython();
    const hasRunRef = useRef(false);

    useEffect(() => {
        if (!hasRunRef.current) {
            asyncPythonStartFunc();
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