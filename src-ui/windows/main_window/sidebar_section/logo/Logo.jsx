import styles from "./Logo.module.scss";

export const Logo = () => {
    return (
        <div className={styles["container"]}>
            <LogoBox />
        </div>
    );
}


import vrct_logo from "@images/vrct_logo_for_dark_mode.png"
import vrct_chato from "@images/vrct_logo_mark_white.png"
import { useIsCompactMode } from "@store";

export const LogoBox = () => {
    const { currentIsCompactMode } = useIsCompactMode();
    if (currentIsCompactMode === true) {
        return <img src={vrct_chato} className={styles["logo_chato"]} alt="VRCT logo chato" />;
    } else {
        return <img src={vrct_logo} className={styles["logo"]} alt="VRCT logo" />;
    }

}