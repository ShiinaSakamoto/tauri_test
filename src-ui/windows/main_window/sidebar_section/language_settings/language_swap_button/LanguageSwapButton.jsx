import { useTranslation } from "react-i18next";

import styles from "./LanguageSwapButton.module.scss";

import NarrowArrowDownSvg from "@images/narrow_arrow_down.svg?react";

export const LanguageSwapButton = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.swap_button_wrapper}>
                <NarrowArrowDownSvg className={
                    `${styles["narrow_arrow_down_svg"]} ${styles["reverse"]}`
                }/>
                <p className={styles.label}>{t("main_window.translate_each_other_label")}</p>
                <NarrowArrowDownSvg className={styles.narrow_arrow_down_svg}/>
            </div>
        </div>
    );
}