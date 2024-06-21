import styles from "./TopBar.module.scss";

export const TopBar = () => {
    return (
        <div className={styles["container"]}>
            <p>VRC mic mute sync</p>
            <p>Overlay(VR)</p>
            <p>Help & Info</p>
        </div>
    )
}