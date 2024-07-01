import styles from "./MainSection.module.scss";

import { TopBar } from "./top_bar/TopBar";
import { MessageContainer } from "./message_container/MessageContainer";
import { LanguageSelector } from "./language_selector/LanguageSelector";

import { useIsOpenedLanguageSelector } from "@store";

export const MainSection = () => {
    const { currentIsOpenedLanguageSelector } = useIsOpenedLanguageSelector();

    const handleMainContainer = () => {
        if (currentIsOpenedLanguageSelector.your_language === true) {
            return <LanguageSelector id="your_language"/>;
        } else if (currentIsOpenedLanguageSelector.target_language === true) {
            return <LanguageSelector id="target_language"/>;
        } else {
            return (
                <>
                    <TopBar />
                    <MessageContainer />
                </>
            );
        }
    };

    return (
        <div className={styles.container}>
            {handleMainContainer()}
        </div>
    );
};