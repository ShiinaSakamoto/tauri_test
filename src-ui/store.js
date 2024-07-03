import {
    atom,
    useAtomValue,
    useSetAtom
} from "jotai";

export const store = {
    child: null,
    config_window: null,
};


const createAtomWithHook = (initialValue, property_names) => {
    const atomInstance = atom(initialValue);

    const useHook = () => {
        const setAtom = useSetAtom(atomInstance);
        const currentAtom = useAtomValue(atomInstance);

        const updateAtom = (value) => {
            setAtom(value);
        };

        return { [property_names.update]: updateAtom, [property_names.current]: currentAtom };
    };

    return { atomInstance, useHook };
};

export const { atomInstance: sentMessageList, useHook: useSentMessageList } = createAtomWithHook(["default"], {
    update: "updateSentMessageList",
    current: "currentSentMessageList"
});

export const { atomInstance: isCompactMode, useHook: useIsCompactMode } = createAtomWithHook(false, {
    update: "updateIsCompactMode",
    current: "currentIsCompactMode"
});

export const { atomInstance: isOpenedLanguageSelector, useHook: useIsOpenedLanguageSelector } = createAtomWithHook(
    { your_language: false, target_language: false },
    {
        update: "updateIsOpenedLanguageSelector",
        current: "currentIsOpenedLanguageSelector"
    }
);

export const { atomInstance: selectedTab, useHook: useSelectedTab } = createAtomWithHook(1, {
    update: "updateSelectedTab",
    current: "currentSelectedTab"
});

export const { atomInstance: selectedConfigTab, useHook: useSelectedConfigTab } = createAtomWithHook("appearance", {
    update: "updateSelectedConfigTab",
    current: "currentSelectedConfigTab"
});

export const { atomInstance: openedDropdownMenu, useHook: useOpenedDropdownMenu } = createAtomWithHook("", {
    update: "updateOpenedDropdownMenu",
    current: "currentOpenedDropdownMenu"
});