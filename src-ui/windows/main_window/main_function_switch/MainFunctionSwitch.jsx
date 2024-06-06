import React, { useState } from "react"
import styles from "./MainFunctionSwitch.module.scss";
import { asyncSendMessage } from "../../../logic";


export const MainFunctionSwitch = () => {
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
            <form
                className="message-form"
                onSubmit={onSubmitFunction}
            >
                <div className="message-textarea-container">
                    <textarea
                    id="message-textarea"
                    className="message-textarea"
                    onChange={onChangeFunction}
                    placeholder="キーが入力されるたびに送信"
                    />
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
            {/* <p className={styles["label"]}>React Test</p> */}
        </div>
    )
}
