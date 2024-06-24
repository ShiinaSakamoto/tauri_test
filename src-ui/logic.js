import { store } from "@store";
import { Command } from "@tauri-apps/api/shell";

const asyncPythonStartFunc = async () => {
    const command = Command.sidecar("bin/test");
    command.on("error", error => console.error(`error: "${error}"`));
    command.stdout.on("data", (line) => {
        let parsed_data = "";
        try {
            parsed_data = JSON.parse(line);
        } catch (error) {
            console.log(error);
            parsed_data = line;
        }
        console.log("stdout:", parsed_data);
    });
    command.stderr.on("data", line => console.error("stderr:", line));
    const child = await command.spawn();
    store.child = child;
};

const asyncSendMessage = async (value) => {
    // send to python
    const child = store.child;
    if (child) {
        await child.write(JSON.stringify({"test_key_from_js": value}) + "\n").then((result) => {
        }).catch((err) => {
            console.log(err);
        });
    }
};

export {
    asyncPythonStartFunc,
    asyncSendMessage,
};