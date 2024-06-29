import { useTranslation } from "react-i18next";

import styles from "./TranslatorSelector.module.scss";

export const TranslatorSelector = () => {
    const { t } = useTranslation();
    return (
        <div className={styles["container"]}>
            <div className={styles["translator_selector_wrapper"]}>
                <p className={styles["label"]}>{t("main_window.translator")}</p>
                <p className={styles["label"]}>DeepL_API</p>
            </div>
        </div>
    );
}