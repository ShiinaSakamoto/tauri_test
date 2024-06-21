import styles from "./MessageBox.module.scss";

export const MessageBox = () => {
    return (
        <div className={styles["container"]}>
            <p>Input Textfield</p>
            <p>Send Message Button</p>
        </div>
    )
}