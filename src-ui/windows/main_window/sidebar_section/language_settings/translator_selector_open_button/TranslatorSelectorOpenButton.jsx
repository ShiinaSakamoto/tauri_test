import { useTranslation } from "react-i18next";

import styles from "./TranslatorSelectorOpenButton.module.scss";
import { TranslatorSelector } from "./translator_selector/TranslatorSelector";
import { useSelectedTranslator, useOpenedTranslatorSelector } from "@store";

export const TranslatorSelectorOpenButton = () => {
    const { t } = useTranslation();
    const { currentSelectedTranslator } = useSelectedTranslator();

    const { currentOpenedTranslatorSelector, updateOpenedTranslatorSelector} = useOpenedTranslatorSelector();

    const openTranslatorSelector = () => updateOpenedTranslatorSelector(true);

    return (
        <div className={styles.container}>
            <div className={styles.translator_selector_button} onClick={openTranslatorSelector}>
                <p className={styles.label}>{t("main_window.translator")}</p>
                <p className={styles.label}>{currentSelectedTranslator}</p>
            </div>
            {
                currentOpenedTranslatorSelector
                ? <TranslatorSelector />
                : null
            }
        </div>
    );
};