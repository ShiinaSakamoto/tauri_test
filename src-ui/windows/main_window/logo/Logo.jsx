import styles from "./Logo.module.scss";
import vrct_logo from "@images/vrct_logo_for_dark_mode.png"
export const Logo = () => {
    return (
        <div className={styles["logo_container"]}>
            <img src={vrct_logo} className={styles["logo"]} alt="VRCT logo" />
        </div>
    )
}