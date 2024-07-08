import { useState } from "react";
import styles from "./MessageInputBox.module.scss";
// import { usePython } from "@logics/usePython";
import SendMessageSvg from "@images/send_message.svg?react";
import { useSentMessageList } from "@store";

export const MessageInputBox = () => {
    const [inputValue, setInputValue] = useState("");
    const { addSentMessageList } = useSentMessageList();
    // const { asyncSendMessage } = usePython();

    const onSubmitFunction = (e) => {
        e.preventDefault();
        // asyncSendMessage(inputValue);
        addSentMessageList(inputValue);
    };

    const onChangeFunction = (e) => {
        setInputValue(e.currentTarget.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.message_box_wrapper}>
                <textarea
                    className={styles.message_box_input_area}
                    onChange={onChangeFunction}
                    placeholder="Input Textfield"
                />
            </div>
            <button
                className={styles.message_send_button}
                type="button"
                onClick={onSubmitFunction}
            >
                <SendMessageSvg className={styles.message_send_icon} />
            </button>
        </div>
    );
};;
