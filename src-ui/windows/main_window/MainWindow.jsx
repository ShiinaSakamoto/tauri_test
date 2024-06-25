import styles from "./MainWindow.module.scss";

import { Logo } from "./logo/Logo";
import { MainFunctionSwitch } from "./main_function_switch/MainFunctionSwitch";
import { LanguageSettings } from "./language_settings/LanguageSettings";
import { OpenSettings } from "./open_settings/OpenSettings";

import { TopBar } from "./top_bar/TopBar";
import { LogBox } from "./log_box/LogBox";
import { MessageBox } from "./message_box/MessageBox";

export const MainWindow = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["sidebar_section"]}>
                <Logo />
                <MainFunctionSwitch />
                <LanguageSettings />
                <OpenSettings />
            </div>
            <div className={styles["main_section"]}>
                <TopBar />
                <div className={styles["message_container"]}>
                    <LogBox />
                    <MessageBox />
                </div>
            </div>
        </div>
    )
}