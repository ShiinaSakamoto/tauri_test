import styles from "./SettingBox.module.scss";
import { useSelectedConfigTab } from "@store";

import { Appearance } from "./appearance/Appearance";

export const SettingBox = () => {
    const { currentSelectedConfigTab } = useSelectedConfigTab();
    switch (currentSelectedConfigTab) {
        case "appearance":
            return <Appearance />;
        default:
            return null;
    }
};