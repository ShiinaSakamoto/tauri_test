import { useSvg } from "@utils/useSvg";

import styles from "./SidebarCompactModeButton.module.scss";

import ArrowLeftSvg from "@images/arrow_left.svg?react";

export const SidebarCompactModeButton = () => {
    const arrowLeftSvg_C = useSvg(<ArrowLeftSvg />, { className: styles["to_compact_mode_arrow_svg"], preserveAspectRatio: "none" } );

    return (
        <div className={styles["container"]}>
            { arrowLeftSvg_C }
        </div>
    );
}