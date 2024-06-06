import React, { useEffect, useState } from "react";
import { Command } from '@tauri-apps/api/shell';
import "./App.css";

import { MainFunctionSwitch as TestInputField } from "@MainFunctionSwitch";
import { store } from "@store";
import { asyncSendMessage } from "./logic";


const MessageDisplay = ({ message }) => {
    return (
        <div className="message-container">
            <p className="message-container-label">Message From Python:</p>
            <p className="message-container-text">{message}</p>
        </div>
    );
};
// const MemolizedMessageDisplay = memo(MessageDisplay);

export const App = () => {
    const [message_from_python, setMessage] = useState("React Initialization...");
    // console.log("App");
    useEffect(() => {
        const asyncPythonStartFunc = async () => {
            const command = Command.sidecar('bin/test');
            command.on('error', error => console.error(`error: "${error}"`));
            command.stdout.on('data', (line) => {
                console.log('stdout:', line);
                setMessage(line);
            });
            command.stderr.on('data', line => console.error('stderr:', line));
            const child = await command.spawn();
            store.child = child;
        };

        asyncPythonStartFunc();
    }, []);

    const asyncButtonClicked = async () => {
        console.log("asyncButtonClicked");
        asyncSendMessage("Button has clicked")
    };


    return (
        <div className="container">
            <TestInputField />
            <MessageDisplay message={message_from_python} />
            <button type="button" onClick={asyncButtonClicked} className="just-button">Just Button</button>

            {/* <MemolizedMessageDisplay message={message_from_python} /> */}
        </div>
    );
}