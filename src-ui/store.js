import {
    atom,
    useAtomValue,
    useSetAtom
} from "jotai";

export const store = {
    child: null,
};

export const sentMessageList = atom(["default"]);

export const useSentMessageList = () => {
    const setSentMessageList = useSetAtom(sentMessageList);
    const currentSentMessageList = useAtomValue(sentMessageList);

    const updateSentMessageList = (message) => {
        setSentMessageList((old_value) => [
            ...old_value,
            message,
        ]);
    };

    return { updateSentMessageList, currentSentMessageList };
};



export const isCompactMode = atom(false);

export const useIsCompactMode = () => {
    const setIsCompactMode = useSetAtom(isCompactMode);
    const currentIsCompactMode = useAtomValue(isCompactMode);

    const updateIsCompactMode = (is_compact_mode) => {
        setIsCompactMode(is_compact_mode);
    };

    return { updateIsCompactMode, currentIsCompactMode };
};