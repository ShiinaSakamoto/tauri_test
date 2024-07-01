import clsx from "clsx";

import styles from "./LanguageSelectorOpenButton.module.scss";

import ArrowLeftSvg from "@images/arrow_left.svg?react";

export const LanguageSelectorOpenButton = (props) => {

    const toggleLanguageSelector = () => {
        props.onClickFunction();
    };

    const class_names = clsx(styles["arrow_left_svg"], {
        [styles["reverse"]]: props.is_opened
    });

    return (
        <div className={styles.container}>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.dropdown_menu_container} onClick={toggleLanguageSelector}>
                <p className={styles.selected_language}>Japanese</p>
                <p className={styles.selected_language}>(Japan)</p>
                <ArrowLeftSvg className={class_names} />
            </div>
        </div>
    );
}