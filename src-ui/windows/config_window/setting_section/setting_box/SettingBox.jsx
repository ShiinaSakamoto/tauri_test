import styles from "./SettingBox.module.scss";

import { useSelectedConfigTab } from "@store";
export const SettingBox = () => {
    const { currentSelectedConfigTab } = useSelectedConfigTab();
    switch (currentSelectedConfigTab) {
        case "appearance":
            return <Appearance />;
        default:
            return null;
    }
};

import { useSettingBox } from "./useSettingBox";
import { useSelectedMicDevice, useMicDeviceList } from "@store";
const Appearance = () => {
    const { currentSelectedMicDevice, updateSelectedMicDevice } = useSelectedMicDevice();
    const { currentMicDeviceList } = useMicDeviceList();
    const { DropdownMenuContainer } = useSettingBox();

    const selectFunction = (selected_data) => {
        // console.log(selected_data);
        // console.log(currentMicDeviceList[selected_data.selected_id]);
        const asyncFunction = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(selected_data.selected_id);
                }, 3000);
            });
        };
        updateSelectedMicDevice(asyncFunction);
    };
    console.log(currentSelectedMicDevice);

    if (currentSelectedMicDevice.state === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <>
            <DropdownMenuContainer dropdown_id="mic_host" label="Mic Host/Driver" desc="description" selected_id="b" list={{a: "A", b: "B", c: "C"}} />
            <DropdownMenuContainer dropdown_id="mic_device" label="Mic Device" desc="description" selected_id={currentSelectedMicDevice.data} list={currentMicDeviceList} selectFunction={selectFunction} />
        </>
    );
};