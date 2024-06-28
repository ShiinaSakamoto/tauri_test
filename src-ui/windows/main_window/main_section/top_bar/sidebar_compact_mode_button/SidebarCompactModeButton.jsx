import clsx from "clsx";
import styles from "./SidebarCompactModeButton.module.scss";

import { useSvg } from "@utils/useSvg";
import { useIsCompactMode } from "@store";
import ArrowLeftSvg from "@images/arrow_left.svg?react";

export const SidebarCompactModeButton = () => {
    const { updateIsCompactMode, currentIsCompactMode } = useIsCompactMode();

    const toggleCompactMode = () => {
        updateIsCompactMode(!currentIsCompactMode);
    };

    const arrowLeftSvg_C = useSvg(<ArrowLeftSvg />,
        {
            className: clsx(styles["arrow_left_svg"], {
                [styles["reverse"]]: currentIsCompactMode
            }),
            preserveAspectRatio: "none"
        }
    );

    return (
        <div className={styles["container"]} onClick={toggleCompactMode}>
            { arrowLeftSvg_C }
        </div>
    );
}