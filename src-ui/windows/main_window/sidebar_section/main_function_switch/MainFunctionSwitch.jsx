import { useTranslation } from "react-i18next";
import clsx from "clsx";
import styles from "./MainFunctionSwitch.module.scss";
import TranslationSvg from "@images/translation.svg?react";
import MicSvg from "@images/mic.svg?react";
import HeadphonesSvg from "@images/headphones.svg?react";
import ForegroundSvg from "@images/foreground.svg?react";
import {
    useMainFunctionStatus_Translation,
    useMainFunctionStatus_TranscriptionSend,
    useMainFunctionStatus_TranscriptionReceive,
    useMainFunctionStatus_Foreground,
    useIsCompactMode,
} from "@store";


export const MainFunctionSwitch = () => {
    const { t } = useTranslation();

    const {
        currentMainFunctionStatus_Translation,
        updateMainFunctionStatus_Translation,
    } = useMainFunctionStatus_Translation();
    const {
        currentMainFunctionStatus_TranscriptionSend,
        updateMainFunctionStatus_TranscriptionSend,
    } = useMainFunctionStatus_TranscriptionSend();
    const {
        currentMainFunctionStatus_TranscriptionReceive,
        updateMainFunctionStatus_TranscriptionReceive,
    } = useMainFunctionStatus_TranscriptionReceive();
    const {
        currentMainFunctionStatus_Foreground,
        updateMainFunctionStatus_Foreground,
    } = useMainFunctionStatus_Foreground();


    const toggleMainFunctionSwitch = (switch_id, is_turned_on) => {
        const asyncFunction = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(is_turned_on);
                }, 3000);
            });
        };

        switch (switch_id) {
            case "translation":
                updateMainFunctionStatus_Translation(asyncFunction);
                break;

            case "transcription_send":
                updateMainFunctionStatus_TranscriptionSend(asyncFunction);
                break;

            case "transcription_receive":
                updateMainFunctionStatus_TranscriptionReceive(asyncFunction);
                break;

            case "foreground":
                updateMainFunctionStatus_Foreground(asyncFunction);
                break;

            default:
                break;
        }
    };

    const switch_items = [
        {
            switch_id: "translation",
            label: t("main_window.translation"),
            SvgComponent: TranslationSvg,
            currentState: currentMainFunctionStatus_Translation,
            toggleFunction: toggleMainFunctionSwitch,
        },
        {
            switch_id: "transcription_send",
            label: t("main_window.transcription_send"),
            SvgComponent: MicSvg,
            currentState: currentMainFunctionStatus_TranscriptionSend,
            toggleFunction: toggleMainFunctionSwitch,
        },
        {
            switch_id: "transcription_receive",
            label: t("main_window.transcription_receive"),
            SvgComponent: HeadphonesSvg,
            currentState: currentMainFunctionStatus_TranscriptionReceive,
            toggleFunction: toggleMainFunctionSwitch,
        },
        {
            switch_id: "foreground",
            label: t("main_window.foreground"),
            SvgComponent: ForegroundSvg,
            currentState: currentMainFunctionStatus_Foreground,
            toggleFunction: toggleMainFunctionSwitch,
        },
    ];

    return (
        <div className={styles.container}>
            {switch_items.map(item => (
                <SwitchContainer
                    key={item.switch_id}
                    switch_id={item.switch_id}
                    switchLabel={item.label}
                    currentState={item.currentState}
                    toggleFunction={item.toggleFunction}
                    SvgComponent={item.SvgComponent}
                >
                </SwitchContainer>
            ))}
        </div>
    );
};


export const SwitchContainer = ({ switchLabel, switch_id, children, currentState, toggleFunction, SvgComponent }) => {
    const { currentIsCompactMode } = useIsCompactMode();

    const getClassNames = (baseClass) => clsx(baseClass, {
        [styles.is_compact_mode]: currentIsCompactMode,
        [styles.is_active]: (currentState.data === true),
        [styles.is_loading]: (currentState.state === "loading"),
    });

    return (
        <div
            className={getClassNames(styles.switch_container)}
            onClick={() => toggleFunction(switch_id, !currentState.data)}
        >
            <p className={getClassNames(styles.switch_label)}>{switchLabel}</p>
            {children}
            <div className={getClassNames(styles.switch_indicator)}></div>
            {(currentState.state === "loading")
                ? <span className={styles.loader}></span>
                : null
            }
            <SvgComponent className={getClassNames(styles.switch_svg)} />
        </div>
    );
};