import React, { useEffect, useState } from "react";
import { Command } from '@tauri-apps/api/shell';
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

// import { MainFunctionSwitch } from "@MainFunctionSwitch";


function App() {
    const [message_from_python, setMessage] = useState("");
    const [input_value, setInputValue] = useState("");

    useEffect(() => {
        (async () => {
            const command = Command.sidecar("bin/test")
            const output = await command.execute();
            setMessage(output.stdout);
        })();
    }, []);

    const asyncSendMessage = async (value = input_value) => {
        console.log(value);
        // send to python
    }

    const onSubmitFunction = (e) => {
        e.preventDefault();
        asyncSendMessage();
    }

    const onChangeFunction = (e) => {
        // e.preventDefault();
        setInputValue(e.currentTarget.value);
        asyncSendMessage(e.currentTarget.value);
    }


    return (
        <div className="container">
            {/* <MainFunctionSwitch /> */}
            <form
                className="message-form"
                onSubmit={onSubmitFunction}
            >
                <div className="message-textarea-container">
                    <textarea
                    id="message-textarea"
                    className="message-textarea"
                    onChange={onChangeFunction}
                    placeholder="Enter a message..."
                    />
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
            <div className="message-container">
                <p className="message-container-label">Message From Python:</p>
                <p className="message-container-text">{message_from_python}</p>
            </div>
        </div>
    );
}

export default App;
