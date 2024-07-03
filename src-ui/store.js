import {
    atom,
    useAtomValue,
    useSetAtom
} from "jotai";

export const store = {
    child: null,
    config_window: null,
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

    const updateSelectedTab = (selected_tab_number) => {
        setSelectedTab(selected_tab_number);
    };

    return { updateSelectedTab, currentSelectedTab };
};



export const selectedConfigTab = atom("appearance");

export const useSelectedConfigTab = () => {
    const setSelectedConfigTab = useSetAtom(selectedConfigTab);
    const currentSelectedConfigTab = useAtomValue(selectedConfigTab);

    const updateSelectedConfigTab = (selected_config_tab_id) => {
        setSelectedConfigTab(selected_config_tab_id);
    };

    return { updateSelectedConfigTab, currentSelectedConfigTab };
};



export const openedDropdownMenu = atom("");

export const useOpenedDropdownMenu = () => {
    const setOpenedDropdownMenu = useSetAtom(openedDropdownMenu);
    const currentOpenedDropdownMenu = useAtomValue(openedDropdownMenu);

    const updateOpenedDropdownMenu = (opened_dropdown_menu_id) => {
        setOpenedDropdownMenu(opened_dropdown_menu_id);
    };

    return { updateOpenedDropdownMenu, currentOpenedDropdownMenu };
};