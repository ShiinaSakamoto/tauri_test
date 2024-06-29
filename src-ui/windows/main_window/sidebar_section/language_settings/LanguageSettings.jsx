import { useTranslation } from "react-i18next";

import styles from "./LanguageSettings.module.scss";

import { PresetSelectTabs } from "./preset_select_tabs/PresetSelectTabs";
import { LanguageSelector } from "./language_selector/LanguageSelector";
import { LanguageSwapButton } from "./language_swap_button/LanguageSwapButton";
import { TranslatorSelector } from "./translator_selector/TranslatorSelector";

export const LanguageSettings = () => {
    return (
        <div className={styles["container"]}>
            <p className={styles["title"]}>Language Settings</p>
            <PresetSelectTabs />
            <PresetContainer />
        </div>
    );
}



import { useIsOpenedLanguageSelector } from "@store";

const PresetContainer = () => {
    const { t } = useTranslation();
    const { updateIsOpenedLanguageSelector, currentIsOpenedLanguageSelector } = useIsOpenedLanguageSelector();


    const closeLanguageSelector = () => {
        updateIsOpenedLanguageSelector({
            your_language: false,
            target_language: false,
        });
    };

    const toggleYourLanguageSelector = () => {
        if (currentIsOpenedLanguageSelector.your_language === true) {
            closeLanguageSelector();
        } else {
            updateIsOpenedLanguageSelector({
                your_language: true,
                target_language: false,
            });
        }
    };

    const toggleTargetLanguageSelector = () => {
        if (currentIsOpenedLanguageSelector.target_language === true) {
            closeLanguageSelector();
        } else {
            updateIsOpenedLanguageSelector({
                your_language: false,
                target_language: true,
            });
        }
    };

    const handleLanguageSelectorClick = (selector) => {
        if (selector === "your_language") {
            toggleYourLanguageSelector();
        } else if (selector === "target_language") {
            toggleTargetLanguageSelector();
        }
    };


    const your_language_settings = {
        title: t("main_window.your_language"),
        is_opened: currentIsOpenedLanguageSelector.your_language,
        onClickFunction: () => handleLanguageSelectorClick("your_language")
    };

    const target_language_settings = {
        title: t("main_window.target_language"),
        is_opened: currentIsOpenedLanguageSelector.target_language,
        onClickFunction: () => handleLanguageSelectorClick("target_language")
    };

    return (
        <div className={styles["preset_container"]}>
            <LanguageSelector {...your_language_settings} />
            <LanguageSwapButton />
            <LanguageSelector {...target_language_settings} />
            <TranslatorSelector />
        </div>
    );
}