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
const Appearance = () => {
    const { DropdownMenuContainer } = useSettingBox();
    return (
        <>
            <DropdownMenuContainer container_id="mic_host" label="Mic Host/Driver" desc="description" selected_id="b" list={{a: "A", b: "B", c: "C"}} />
            <DropdownMenuContainer container_id="mic_device" label="Mic Device" desc="description" selected_id="b" list={{a: "A", b: "B"}} />
        </>
    );
};