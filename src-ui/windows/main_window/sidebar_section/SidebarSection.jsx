import styles from "./SidebarSection.module.scss";

import { Logo } from "./logo/Logo";
import { MainFunctionSwitch } from "./main_function_switch/MainFunctionSwitch";
import { LanguageSettings } from "./language_settings/LanguageSettings";
import { OpenSettings } from "./open_settings/OpenSettings";

export const SidebarSection = () => {
    return (
        <div className={styles["container"]}>
            <Logo />
            <MainFunctionSwitch />
            <LanguageSettings />
            <OpenSettings />
        </div>
    );
}