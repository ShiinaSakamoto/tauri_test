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

import { loadable } from "jotai/utils";
const createAsyncAtomWithHook = (initialValue, propertyNames) => {
    const atomInstance = atom(initialValue);
    const asyncAtom = atom(async (get) => get(atomInstance));

    const loadableAtom = loadable(asyncAtom);

    const useHook = () => {
        const setAtom = useSetAtom(atom(null, async (get, set, payloadAsyncFunc) => {
            set(atomInstance, payloadAsyncFunc());
        }));

        const currentAtom = useAtomValue(loadableAtom);

        const updateAtom = async (asyncFunction) => {
            setAtom(asyncFunction);
        };

        return { [propertyNames.update]: updateAtom, [propertyNames.current]: currentAtom };
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


export const { atomInstance: selectedMicDevice, useHook: useSelectedMicDevice } = createAsyncAtomWithHook("device b", {
    update: "updateSelectedMicDevice",
    current: "currentSelectedMicDevice"
});
const test_list = {
    a: "Device A",
    "device b": "Device B",
};
export const { atomInstance: micDeviceList, useHook: useMicDeviceList } = createAtomWithHook(test_list, {
    update: "updateMicDeviceList",
    current: "currentMicDeviceList"
});