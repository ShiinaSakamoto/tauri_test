import { WebviewWindow } from "@tauri-apps/api/window";
import { store } from "@store";
import { getCurrent } from "@tauri-apps/api/window";

export const useWindow = () => {

    const createSecondWindow = async () => {
        const main_window = getCurrent();
        if (store.second_window === null) {
            const second_window = new WebviewWindow("theUniqueLabel", {
                url: "./second_window.html",
            });

            second_window.once("tauri://created", function () {
                store.second_window = second_window;
            });
            second_window.once("tauri://error", function (e) {
                console.log(e);
            });

            const unlisten_c = second_window.onCloseRequested((event) => {
                store.second_window = null;
                unlisten_c();
            });

            main_window.onCloseRequested((event) => {
                second_window.close();
            });

        }
    };

    const closeSecondWindow = () => {
        console.log(store.second_window);
        store.second_window.close();
    };

    return { createSecondWindow, closeSecondWindow };
};