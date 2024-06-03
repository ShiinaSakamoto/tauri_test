import React, { useEffect, useState, useRef } from "react";
import { Command } from '@tauri-apps/api/shell';
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

// import { MainFunctionSwitch } from "@MainFunctionSwitch";


function App() {
    const [message_from_python, setMessage] = useState("");
    const [input_value, setInputValue] = useState("");
    const childRef = useRef(null); // Ref to hold the child process

    useEffect(() => {
        (async () => {
            const command = Command.sidecar('bin/test');

            command.on('error', error => console.error(`error: "${error}"`));
            command.stdout.on('data', (line) => {
                console.log('stdout:', line);
                setMessage(line);
            });
            command.stderr.on('data', line => console.error('stderr:', line));

            console.log("1");
            const child = await command.spawn();

            childRef.current = child;
            // setMessage(output.stdout);
            console.log("2");

            await child.write('Test data from React');
            console.log("3");
        })();
    }, []);

    const asyncSendMessage = async (value = input_value) => {
        console.log(value);
        // send to python
        const child = childRef.current;
        if (child) {
            await child.write(value);
        }
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
