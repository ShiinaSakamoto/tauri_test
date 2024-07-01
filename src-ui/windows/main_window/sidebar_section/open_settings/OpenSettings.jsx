import styles from "./OpenSettings.module.scss";
import ConfigurationSvg from "@images/configuration.svg?react";

export const OpenSettings = () => {
    return (
        <div className={styles.container}>
            <div className={styles.open_config_window_button}>
                <ConfigurationSvg className={styles.configuration_svg} />
            </div>
        </div>
    );
};