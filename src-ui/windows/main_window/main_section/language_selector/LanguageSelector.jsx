import { language_list } from "@data";
import styles from "./LanguageSelector.module.scss";

import { LanguageSelectorTopBar } from "./language_selector_top_bar/LanguageSelectorTopBar"
export const LanguageSelector = ({ id }) => {
    const groupLanguagesByFirstLetter = (languages) => {
        return languages.reduce((acc, { language, country }) => {
            const firstLetter = language[0].toUpperCase();
            if (!acc[firstLetter]) {
                acc[firstLetter] = [];
            }
            acc[firstLetter].push({ language, country });
            return acc;
        }, {});
    };

    const groupedLanguages = groupLanguagesByFirstLetter(language_list);

    return (
        <div className={styles.container}>
            <LanguageSelectorTopBar title={id}/>
            <div className={styles.language_list_scroll_wrapper}>
                <div className={styles.language_list}>
                    {Object.entries(groupedLanguages).map(([letter, languages]) => (
                        <LanguageGroup key={letter} letter={letter} languages={languages} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const LanguageGroup = ({ letter, languages }) => {
    return (
        <div className={styles.language_each_letter_box}>
            <p className={styles.language_latter}>{letter}</p>
            {languages.map((languageData, index) => (
                <LanguageButton key={index} languageData={languageData} />
            ))}
        </div>
    );
};

const LanguageButton = ({ languageData }) => {
    return (
        <div className={styles.language_button}>
            <p className={styles.language_label}>{languageData.language} ({languageData.country})</p>
        </div>
    );
};