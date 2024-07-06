import {
    atom,
    useAtomValue,
    useSetAtom
} from "jotai";

import { translator_list } from "@data";

export const store = {
    child: null,
    config_window: null,
};

const createAtomWithHook = (initialValue, property_names) => {
    const atomInstance = atom(initialValue);

    const useHook = () => {
        const currentAtom = useAtomValue(atomInstance);

        const setAtom = useSetAtom(atomInstance);

        const updateAtom = (value) => {
            setAtom(value);
        };

        const addAtom = (value) => {
            setAtom((old_value) => [...old_value, value]);
        };

        return {
            [property_names.current]: currentAtom,
            [property_names.update]: updateAtom,
            [property_names.add]: addAtom,
        };
    };

    return { atomInstance, useHook };
};

import { loadable } from "jotai/utils";
const createAsyncAtomWithHook = (initialValue, property_names) => {
    const atomInstance = atom(initialValue);
    const asyncAtom = atom(async (get) => get(atomInstance));

    const loadableAtom = loadable(asyncAtom);

    const useHook = () => {
        const currentAtom = useAtomValue(loadableAtom);

        const setAtom = useSetAtom(atomInstance);
        const updateAtom = (value) => {
            setAtom(value);
        };

        const asyncSetAtom = useSetAtom(atom(null, async (get, set, payloadAsyncFunc, ...args) => {
            set(atomInstance, payloadAsyncFunc(...args));
        }));
        const asyncUpdateAtom = async (asyncFunction, ...args) => {
            asyncSetAtom(asyncFunction, ...args);
        };

        return {
            [property_names.current]: currentAtom,
            [property_names.update]: updateAtom,
            [property_names.async_update]: asyncUpdateAtom,
        };
    };

    return { atomInstance, useHook };
};


export const { atomInstance: Status_Translation, useHook: useStatus_Translation } = createAsyncAtomWithHook(false, {
    current: "currentStatus_Translation",
    update: "updateStatus_Translation",
    async_update: "asyncUpdateStatus_Translation",
});
export const { atomInstance: Status_TranscriptionSend, useHook: useStatus_TranscriptionSend } = createAsyncAtomWithHook(false, {
    current: "currentStatus_TranscriptionSend",
    update: "updateStatus_TranscriptionSend",
    async_update: "asyncUpdateStatus_TranscriptionSend",
});
export const { atomInstance: Status_TranscriptionReceive, useHook: useStatus_TranscriptionReceive } = createAsyncAtomWithHook(false, {
    current: "currentStatus_TranscriptionReceive",
    update: "updateStatus_TranscriptionReceive",
    async_update: "asyncUpdateStatus_TranscriptionReceive",
});
export const { atomInstance: Status_Foreground, useHook: useStatus_Foreground } = createAsyncAtomWithHook(false, {
    current: "currentStatus_Foreground",
    update: "updateStatus_Foreground",
    async_update: "asyncUpdateStatus_Foreground",
});



export const { atomInstance: sentMessageList, useHook: useSentMessageList } = createAtomWithHook(["default"], {
    current: "currentSentMessageList",
    update: "updateSentMessageList",
    add: "addSentMessageList",
});

export const { atomInstance: isCompactMode, useHook: useIsCompactMode } = createAtomWithHook(false, {
    current: "currentIsCompactMode",
    update: "updateIsCompactMode",
});

export const { atomInstance: isOpenedLanguageSelector, useHook: useIsOpenedLanguageSelector } = createAtomWithHook(
    { your_language: false, target_language: false },
    {
        current: "currentIsOpenedLanguageSelector",
        update: "updateIsOpenedLanguageSelector",
    }
);

export const { atomInstance: selectedTab, useHook: useSelectedTab } = createAtomWithHook(1, {
    current: "currentSelectedTab",
    update: "updateSelectedTab",
});

export const { atomInstance: selectedConfigTab, useHook: useSelectedConfigTab } = createAtomWithHook("appearance", {
    current: "currentSelectedConfigTab",
    update: "updateSelectedConfigTab",
});

export const { atomInstance: openedDropdownMenu, useHook: useOpenedDropdownMenu } = createAtomWithHook("", {
    current: "currentOpenedDropdownMenu",
    update: "updateOpenedDropdownMenu",
});


export const { atomInstance: selectedMicDevice, useHook: useSelectedMicDevice } = createAsyncAtomWithHook("device b", {
    current: "currentSelectedMicDevice",
    update: "updateSelectedMicDevice",
});
const test_list = {
    a: "Device A",
    "device b": "Device B",
};
export const { atomInstance: micDeviceList, useHook: useMicDeviceList } = createAtomWithHook(test_list, {
    current: "currentMicDeviceList",
    update: "updateMicDeviceList",
});

export const { atomInstance: translatorList, useHook: useTranslatorList } = createAtomWithHook(translator_list, {
    current: "currentTranslatorList",
    update: "updateTranslatorList",
});

export const { atomInstance: selectedTranslator, useHook: useSelectedTranslator } = createAtomWithHook("CTranslate2", {
    current: "currentSelectedTranslator",
    update: "updateSelectedTranslator",
});

export const { atomInstance: openedTranslatorSelector, useHook: useOpenedTranslatorSelector } = createAtomWithHook(false, {
    current: "currentOpenedTranslatorSelector",
    update: "updateOpenedTranslatorSelector",
});