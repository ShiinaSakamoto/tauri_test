import {
    useStatus_Translation,
    useStatus_TranscriptionSend,
    useStatus_TranscriptionReceive,
    useStatus_Foreground,
} from "@store";

export const useMainFunction = () => {
    const {
        currentStatus_Translation,
        updateStatus_Translation,
    } = useStatus_Translation();
    const {
        currentStatus_TranscriptionSend,
        updateStatus_TranscriptionSend,
    } = useStatus_TranscriptionSend();
    const {
        currentStatus_TranscriptionReceive,
        updateStatus_TranscriptionReceive,
    } = useStatus_TranscriptionReceive();
    const {
        currentStatus_Foreground,
        updateStatus_Foreground,
    } = useStatus_Foreground();


    return {
        toggleTranslation: () => {
            updateStatus_Translation(asyncFunction, !currentStatus_Translation.data);
        },
        currentStatus_Translation: currentStatus_Translation,

        toggleTranscriptionSend: () => {
            updateStatus_TranscriptionSend(asyncFunction, !currentStatus_TranscriptionSend.data);
        },
        currentStatus_TranscriptionSend: currentStatus_TranscriptionSend,

        toggleTranscriptionReceive: () => {
            updateStatus_TranscriptionReceive(asyncFunction, !currentStatus_TranscriptionReceive.data);
        },
        currentStatus_TranscriptionReceive: currentStatus_TranscriptionReceive,

        toggleForeground: () => {
            updateStatus_Foreground(asyncFunction, !currentStatus_Foreground.data);
        },
        currentStatus_Foreground: currentStatus_Foreground,
    };
};

const asyncFunction = (...args) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(...args);
        }, 3000);
    });
};