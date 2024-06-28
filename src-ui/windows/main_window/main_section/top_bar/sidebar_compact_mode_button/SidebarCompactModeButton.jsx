import clsx from "clsx";
import styles from "./SidebarCompactModeButton.module.scss";

import { useSvg } from "@utils/useSvg";
import { useIsMainWindowSidebarCompactMode } from "@store";
import ArrowLeftSvg from "@images/arrow_left.svg?react";

export const SidebarCompactModeButton = () => {
    const { updateIsMainWindowSidebarCompactMode, currentIsMainWindowSidebarCompactMode } = useIsMainWindowSidebarCompactMode();

    const toggleCompactMode = () => {
        updateIsMainWindowSidebarCompactMode(!currentIsMainWindowSidebarCompactMode);
    }

    const arrowLeftSvg_C = useSvg(<ArrowLeftSvg />,
        {
            className: clsx(styles["arrow_left_svg"], {
                [styles["reverse"]]: currentIsMainWindowSidebarCompactMode
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