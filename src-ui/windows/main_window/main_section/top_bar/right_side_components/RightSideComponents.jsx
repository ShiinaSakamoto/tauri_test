import styles from "./RightSideComponents.module.scss";

import HelpSvg from "@images/help.svg?react";

export const RightSideComponents = () => {
    return (
        <div className={styles.container}>
            <p>VRC mic mute sync</p>
            <p>Overlay(VR)</p>
            <HelpSvg className={styles.help_svg} />
        </div>
    );
};