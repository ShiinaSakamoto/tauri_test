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

import { useSvg } from "@utils/useSvg";

const SwitchContainer = (props) => {
    const imageWithClass = useSvg(props.image_component, { className: styles["switch_image"] });

    return (
        <div className={styles["switch_container"]}>
            <p className={styles["switch_label"]}>{props.switch_label}</p>
            <div className={styles["switch_box"]}>
                {imageWithClass}
                <div className={styles["switch_indicator"]}></div>
            </div>
        </div>
    );
}