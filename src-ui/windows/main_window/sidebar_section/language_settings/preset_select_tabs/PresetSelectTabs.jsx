import styles from "./PresetSelectTabs.module.scss";

export const PresetSelectTabs = () => {
    return (
        <div className={styles["container"]}>
            <Tab preset_number={1} />
            <Tab preset_number={2} />
            <Tab preset_number={3} />
        </div>
    );
}

const Tab = (props) => {
    return (
        <div className={styles["tab_container"]}>
            <p className={styles["tab_number"]}>{props.preset_number}</p>
        </div>
    );
}