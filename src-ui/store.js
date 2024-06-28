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



export const isMainWindowSidebarCompactMode = atom(false);

export const useIsMainWindowSidebarCompactMode = () => {
    const setIsMainWindowSidebarCompactMode = useSetAtom(isMainWindowSidebarCompactMode);
    const currentIsMainWindowSidebarCompactMode = useAtomValue(isMainWindowSidebarCompactMode);

    const updateIsMainWindowSidebarCompactMode = (is_compact_mode) => {
        setIsMainWindowSidebarCompactMode(is_compact_mode);
    };

    return { updateIsMainWindowSidebarCompactMode, currentIsMainWindowSidebarCompactMode };
};