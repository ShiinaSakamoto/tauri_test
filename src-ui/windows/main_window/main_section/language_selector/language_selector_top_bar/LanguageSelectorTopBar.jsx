import styles from "./LanguageSelectorTopBar.module.scss";

export const LanguageSelectorTopBar = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.go_back_button_wrapper}>
                <p className={styles.go_back_button_label}>Go Back</p>
            </div>
            <p className={styles.title}>{props.title}</p>
        </div>
    );
};