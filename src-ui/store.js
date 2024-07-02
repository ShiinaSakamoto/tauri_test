import {
    atom,
    useAtomValue,
    useSetAtom
} from "jotai";

export const store = {
    child: null,
    second_window: null,
};

export const isBackendReady = atom(false);

export const useIsBackendReady = () => {
    const setIsBackendReady = useSetAtom(isBackendReady);
    const currentIsBackendReady = useAtomValue(isBackendReady);

    const updateIsBackendReady = (is_backend_ready) => {
        setIsBackendReady(is_backend_ready);
    };

    return { updateIsBackendReady, currentIsBackendReady };
};



export const pythonReadyCount = atom("0");

export const usePythonReadyCount = () => {
    const setPythonReadyCount = useSetAtom(pythonReadyCount);
    const currentPythonReadyCount = useAtomValue(pythonReadyCount);

    const updatePythonReadyCount = (python_count) => {
        setPythonReadyCount(python_count);
    };

    return { updatePythonReadyCount, currentPythonReadyCount };
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



export const isOpenedLanguageSelector = atom({
    your_language: false,
    target_language: false,
});

export const useIsOpenedLanguageSelector = () => {
    const setIsOpenedLanguageSelector = useSetAtom(isOpenedLanguageSelector);
    const currentIsOpenedLanguageSelector = useAtomValue(isOpenedLanguageSelector);

    const updateIsOpenedLanguageSelector = (is_opened_language_selector_obj) => {
        setIsOpenedLanguageSelector(is_opened_language_selector_obj);
    };

    return { updateIsOpenedLanguageSelector, currentIsOpenedLanguageSelector };
};



export const selectedTab = atom(1);

export const useSelectedTab = () => {
    const setSelectedTab = useSetAtom(selectedTab);
    const currentSelectedTab = useAtomValue(selectedTab);

    const updateSelectedTab = (is_compact_mode) => {
        setSelectedTab(is_compact_mode);
    };

    return { updateSelectedTab, currentSelectedTab };
};