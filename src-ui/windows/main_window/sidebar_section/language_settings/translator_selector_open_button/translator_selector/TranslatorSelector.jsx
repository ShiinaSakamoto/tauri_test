import styles from "./TranslatorSelector.module.scss";

import { useSelectedTranslator, useOpenedTranslatorSelector } from "@store";
export const TranslatorSelector = () => {

    return (
        <div className={styles.container} >
            <div className={styles.wrapper}>

                <div className={styles.column_wrapper}>
                    <TranslatorBox translator_id="DeepL" translator_name="DeepL" />
                    <TranslatorBox translator_id="DeepL_API" translator_name={`DeepL\nAPI`} />
                </div>
                <div className={styles.column_wrapper}>
                    <TranslatorBox translator_id="Google" translator_name="Google" />
                    <TranslatorBox translator_id="Bing" translator_name="Bing" />
                </div>
                <div className={styles.column_wrapper}>
                    <TranslatorBox translator_id="Papago" translator_name="Papago" />
                    <TranslatorBox translator_id="CTranslate2" translator_name={`Internal\n(Default)`} />
                </div>

            </div>
        </div>
    );
};

import clsx from "clsx";

const TranslatorBox = (props) => {
    const { currentSelectedTranslator, updateSelectedTranslator} = useSelectedTranslator();
    const { updateOpenedTranslatorSelector} = useOpenedTranslatorSelector();

    const box_class_name = clsx(styles.box, {
        [styles["is_selected"]]: (currentSelectedTranslator === props.translator_id) ? true : false
    });

    const selectTranslator = () => {
        updateSelectedTranslator(props.translator_id);
        updateOpenedTranslatorSelector(false);
    };
    return (
        <div className={box_class_name} onClick={selectTranslator}>
            <p className={styles.translator_name}>{props.translator_name}</p>
        </div>
    );
};