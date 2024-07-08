import {
    useStatus_Translation,
    useStatus_TranscriptionSend,
    useStatus_TranscriptionReceive,
    useStatus_Foreground,
} from "@store";

import { usePython } from "./usePython";

export const useMainFunction = () => {
    const {
        currentStatus_Translation,
        asyncUpdateStatus_Translation,
    } = useStatus_Translation();
    const {
        currentStatus_TranscriptionSend,
        asyncUpdateStatus_TranscriptionSend,
    } = useStatus_TranscriptionSend();
    const {
        currentStatus_TranscriptionReceive,
        asyncUpdateStatus_TranscriptionReceive,
    } = useStatus_TranscriptionReceive();
    const {
        currentStatus_Foreground,
        updateStatus_Foreground,
    } = useStatus_Foreground();

    const { asyncSendMessage } = usePython();

    const asyncPending = () => new Promise(() => {});
    return {
        toggleTranslation: () => {
            asyncSendMessage({id: "translation", data: !currentStatus_Translation.data});
            asyncUpdateStatus_Translation(asyncPending);
        },
        currentStatus_Translation: currentStatus_Translation,

        toggleTranscriptionSend: () => {
            asyncSendMessage({id: "transcription_send", data: !currentStatus_TranscriptionSend.data});
            asyncUpdateStatus_TranscriptionSend(asyncPending);
        },
        currentStatus_TranscriptionSend: currentStatus_TranscriptionSend,

        toggleTranscriptionReceive: () => {
            asyncSendMessage({id: "transcription_receive", data: !currentStatus_TranscriptionReceive.data});
            asyncUpdateStatus_TranscriptionReceive(asyncPending);
        },
        currentStatus_TranscriptionReceive: currentStatus_TranscriptionReceive,

        toggleForeground: () => {
            updateStatus_Foreground(!currentStatus_Foreground.data);
        },
        currentStatus_Foreground: currentStatus_Foreground,
    };
};

const asyncTestFunction = (...args) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(...args);
        }, 3000);
    });
};