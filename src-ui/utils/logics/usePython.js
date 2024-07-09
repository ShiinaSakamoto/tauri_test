import { store } from "@store";
import { Command } from "@tauri-apps/api/shell";
import {
    useStatus_Translation,
    useStatus_TranscriptionSend,
    useStatus_TranscriptionReceive,
} from "@store";


export const usePython = () => {
    // const { updateStatus_Translation } = useStatus_Translation();
    // const { updateStatus_TranscriptionSend } = useStatus_TranscriptionSend();
    // const { updateStatus_TranscriptionReceive } = useStatus_TranscriptionReceive();
    return {
        asyncPythonStartFunc: async () => {
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
                console.log("from python:", parsed_data);
                // if (parsed_data.status === "ok") {
                //     switch (parsed_data.id) {
                //         case "translation":
                //             updateStatus_Translation(parsed_data.data);
                //             break;
                //         case "transcription_send":
                //             updateStatus_TranscriptionSend(parsed_data.data);
                //             break;
                //         case "transcription_receive":
                //             updateStatus_TranscriptionReceive(parsed_data.data);
                //             break;
                //         default:
                //             break;
                //     }
                // }

            });
            command.stderr.on("data", line => console.error("stderr:", line));
            const child = await command.spawn();
            store.child = child;
        },

        asyncSendMessage: async (value) => {
            // send to python
            const child = store.child;
            if (child) {
                await child.write(JSON.stringify(value) + "\n").then((result) => {
                }).catch((err) => {
                    console.log(err);
                });
            }
        },

    };
};