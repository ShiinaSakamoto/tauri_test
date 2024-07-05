import { useTranslation } from "react-i18next";
import styles from "./MainFunctionSwitch.module.scss";
import TranslationSvg from "@images/translation.svg?react";
import MicSvg from "@images/mic.svg?react";
import HeadphonesSvg from "@images/headphones.svg?react";
import ForegroundSvg from "@images/foreground.svg?react";

export const MainFunctionSwitch = () => {
    const { t } = useTranslation();

    const switch_items = [
        { label: t("main_window.translation"), SvgComponent: TranslationSvg },
        { label: t("main_window.transcription_send"), SvgComponent: MicSvg },
        { label: t("main_window.transcription_receive"), SvgComponent: HeadphonesSvg },
        { label: t("main_window.foreground"), SvgComponent: ForegroundSvg },
    ];

    return (
        <div className={styles.container}>
            {switch_items.map((item, index) => (
                <SwitchContainer key={index} switch_label={item.label}>
                    <item.SvgComponent className={styles.switch_image} />
                </SwitchContainer>
            ))}
        </div>
    );
};

import clsx from "clsx";
import { useIsCompactMode } from "@store";

export const SwitchContainer = ({ switch_label, children }) => {
    const { currentIsCompactMode } = useIsCompactMode();

    const getClassNames = (base_class) => clsx(base_class, {
        [styles.is_compact_mode]: currentIsCompactMode
    });

    return (
        <div className={getClassNames(styles.switch_container)}>
            <p className={getClassNames(styles.switch_label)}>{switch_label}</p>
            {children}
            <div className={getClassNames(styles.switch_indicator)}></div>
        </div>
    );
};