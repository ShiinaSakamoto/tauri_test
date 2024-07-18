import { WebviewWindow } from "@tauri-apps/api/window";
import { store } from "@store";
import { getCurrent } from "@tauri-apps/api/window";

export const useWindow = () => {

    const createConfigWindow = async () => {
        const main_window = getCurrent();
        if (store.config_window === null) {
            const config_window = new WebviewWindow("theUniqueLabel",{
                url: "./src-ui/windows/config_window/index.html",
                center: true,
                width: 1080,
                height: 700,
            });

            config_window.once("tauri://created", function () {
                store.config_window = config_window;
            });
            config_window.once("tauri://error", function (e) {
                console.log(e);
            });

            const unlisten_c = config_window.onCloseRequested((event) => {
                store.config_window = null;
                unlisten_c();
            });

            main_window.onCloseRequested((event) => {
                config_window.close();
            });
        }
    };

    const closeConfigWindow = () => {
        console.log(store.config_window);
        store.config_window.close();
    };

    return { createConfigWindow, closeConfigWindow };
};