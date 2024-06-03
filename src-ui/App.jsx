    import React, { useEffect, useState } from "react";
    import { Command } from '@tauri-apps/api/shell';
    import reactLogo from "./assets/react.svg";
    import { invoke } from "@tauri-apps/api/tauri";
    import "./App.css";

    import { MainFunctionSwitch } from "@MainFunctionSwitch";


function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        (async () => {
            const command = Command.sidecar("bin/test")
            command.on('error', error => console.error(`error: "${error}"`));
            command.stdout.on('data', (line) => {
                setGreetMsg(line);
            });
            command.stderr.on('data', line => console.log("stderr:", line));
            await command.execute();
            // setGreetMsg(output.stdout);
        })();
    }, [])

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        // setGreetMsg(await invoke("run_python_script"));
        setGreetMsg(await invoke("run_python_script", { input: name }));
    }

    return (
        <div className="container">
        <MainFunctionSwitch />
        <h1>Welcome to Tauri!</h1>
        <div className="row">

            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
            </a>
            <a href="https://tauri.app" target="_blank" rel="noreferrer">
            <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>

        <p>Click on the Tauri, Vite, and React logos to learn more.</p>

        <form
            className="row"
            onSubmit={(e) => {
            e.preventDefault();
            greet();
            }}
        >
            <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
            />
            <button type="submit">Greet</button>
        </form>

        <p>{greetMsg}</p>
        </div>
    );
    }

    export default App;
