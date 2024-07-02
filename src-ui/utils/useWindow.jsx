import { getCurrent, WebviewWindow, LogicalPosition, LogicalSize } from "@tauri-apps/api/window";
import { store } from "@store";

export const useWindow = () => {
    const main_window = getCurrent();

    const setMainWindowPosition = () => {
        main_window.setDecorations(true);
        main_window.setSize(new LogicalSize(800, 600));
        main_window.setPosition(new LogicalPosition(0, 0));
    };

    const createSecondWindow = async () => {
        if (store.second_window === null) {
            const second_window = new WebviewWindow("theUniqueLabel",{
                url: "./second_window.html",
                center: true
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

    return { setMainWindowPosition, createSecondWindow, closeSecondWindow };
};