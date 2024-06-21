import { store } from "@store";
import { Command } from '@tauri-apps/api/shell';

const asyncPythonStartFunc = async () => {
    const command = Command.sidecar('bin/test');
    command.on('error', error => console.error(`error: "${error}"`));
    command.stdout.on('data', (line) => {
        console.log('stdout:', line);
        // setMessage(line);
    });
    command.stderr.on('data', line => console.error('stderr:', line));
    const child = await command.spawn();
    store.child = child;
};


let count = 0;
const asyncSendMessage = async (value) => {
    console.log(value);
    // send to python
    const child = store.child;
    if (child) {
        // await child.write(value).then((result) => {
        await child.write(value + "\n").then((result) => {
            count+=1;
            console.log("send count", count);
        }).catch((err) => {
            console.log(err);
        });
    }
};

export {
    asyncPythonStartFunc,
    asyncSendMessage,
};