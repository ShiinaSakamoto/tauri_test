import { useTranslation } from "react-i18next";

import styles from "./SidebarSection.module.scss";

export const SidebarSection = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.tab_wrapper}>
                <Tab
                    tab_id="appearance"
                    label={t("config_window.side_menu_labels.appearance")}
                />
                <Tab
                    tab_id="translation"
                    label={t("config_window.side_menu_labels.translation")}
                />
                <Tab
                    tab_id="transcription"
                    label={t("config_window.side_menu_labels.transcription")}
                />
                <Tab
                    tab_id="vr"
                    label={t("config_window.side_menu_labels.vr")}
                />
                <Tab
                    tab_id="others"
                    label={t("config_window.side_menu_labels.others")}
                />
                <Tab
                    tab_id="advanced_settings"
                    label={t("config_window.side_menu_labels.advanced_settings")}
                />
            </div>
            <div className={styles.separated_tab_wrapper}>
                <Tab
                    tab_id="about_vrct"
                    label="About VRCT"
                />
            </div>
        </div>
    );
};


import clsx from "clsx";

import { useSelectedConfigTab } from "@store";

const Tab = (props) => {
    const { updateSelectedConfigTab, currentSelectedConfigTab } = useSelectedConfigTab();
    const onclickFunction = () => {
        updateSelectedConfigTab(props.tab_id);
    };

    const tab_container_class_names = clsx(styles["tab_container"], {
        [styles["is_selected"]]: (currentSelectedConfigTab === props.tab_id) ? true : false
    });
    const switch_indicator_class_names = clsx(styles["switch_indicator"], {
        [styles["is_selected"]]: (currentSelectedConfigTab === props.tab_id) ? true : false
    });

    return (
        <div className={tab_container_class_names} onClick={onclickFunction}>
            <p className={styles.tab_text}>{props.label}</p>
            <div className={switch_indicator_class_names}></div>
        </div>
    );
};