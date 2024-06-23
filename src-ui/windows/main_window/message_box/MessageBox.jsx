import { useState } from "react";
import styles from "./MessageBox.module.scss";
import { asyncSendMessage } from "@logic";
import SendMessageSvg from "@images/send_message.svg?react";



export const MessageBox = () => {
    const [input_value, setInputValue] = useState("");
    const onSubmitFunction = (e) => {
        console.log("onSubmitFunction");
        e.preventDefault();
        asyncSendMessage(input_value);
    }

    const onChangeFunction = (e) => {
        console.log("onChangeFunction");
        // e.preventDefault();
        setInputValue(e.currentTarget.value);
        asyncSendMessage(e.currentTarget.value);
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["message_box_wrapper"]}>
                <textarea
                // id="message-textarea"
                className={styles["message_box_input_area"]}
                onChange={onChangeFunction}
                placeholder="Input Textfield"
                />
            </div>
            <button className={styles["message_send_button"]} type="button" onClick={onSubmitFunction}>
                <SendMessageSvg className={styles["message_send_icon"]} />
            </button>
        </div>
    )
}