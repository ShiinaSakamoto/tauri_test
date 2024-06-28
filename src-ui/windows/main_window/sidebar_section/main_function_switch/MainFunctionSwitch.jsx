import { useTranslation } from "react-i18next";

import styles from "./MainFunctionSwitch.module.scss";
import TranslationSvg from "@images/translation.svg?react";
import MicSvg from "@images/mic.svg?react";
import HeadphonesSvg from "@images/headphones.svg?react";
import ForegroundSvg from "@images/foreground.svg?react";

export const MainFunctionSwitch = () => {
    const { t } = useTranslation();
    return (
        <div className={styles["container"]}>
            <SwitchContainer switch_label={t("main_window.translation")} image_component={
                <TranslationSvg />
            }/>
            <SwitchContainer switch_label="Voice2Chatbox" image_component={
                <MicSvg />
            }/>
            <SwitchContainer switch_label="Speaker2Log" image_component={
                <HeadphonesSvg />
            }/>
            <SwitchContainer switch_label="Foreground" image_component={
                <ForegroundSvg />
            }/>
        </div>
    );
}

import clsx from "clsx";
import { useSvg } from "@utils/useSvg";
import { useIsCompactMode } from "@store";

const SwitchContainer = (props) => {
    const { currentIsCompactMode } = useIsCompactMode();

    const imageWithClass = useSvg(props.image_component, { className: styles["switch_image"] });

    const switch_container_class_names = clsx(styles["switch_container"], {
        [styles["is_compact_mode"]]: currentIsCompactMode
    });

    const switch_label_class_names = clsx(styles["switch_label"], {
        [styles["is_compact_mode"]]: currentIsCompactMode
    });

    const switch_indicator_class_names = clsx(styles["switch_indicator"], {
        [styles["is_compact_mode"]]: currentIsCompactMode
    });

    return (
        <div className={switch_container_class_names}>
            <p className={switch_label_class_names}>{props.switch_label}</p>
            {imageWithClass}
            <div className={switch_indicator_class_names}></div>
        </div>
    );
}