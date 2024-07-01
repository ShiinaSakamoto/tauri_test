import { WebviewWindow } from "@tauri-apps/api/window";
import { store } from "@store";
import { emit, once } from '@tauri-apps/api/event';

let count =0;
export const useWindow = () => {

    const createSecondWindow = async () => {
        if (store.second_window === null) {
            const webview = new WebviewWindow("theUniqueLabel", {
                url: "./second_window.html",
            });

            webview.once("tauri://created", function () {
                // webview window successfully created
                console.log("success");
                // webview.hide();
                store.second_window = webview;
            });
            webview.once("tauri://error", function (e) {
                // an error occurred during webview window creation
                console.log(e);
            });
            webview.onCloseRequested((event) => {
                console.log("close the window has requested");
                store.second_window = null;
                // webview.close();
                // event.preventDefault();
                // preventDefault is not working. it looks a bug and will fix 2.x ?
                // https://github.com/tauri-apps/tauri/issues/8435
                // https://github.com/tauri-apps/tauri/pull/8621
            });

            await once("onCloseRequested", function (e) {
                // an error occurred during webview window creation
                console.log("onCloseRequested", count);
                count+=1;
                store.second_window = null;
            });
        }
    };

    const closeSecondWindow = () => {
        console.log(store.second_window);
        store.second_window.close();
    };

    return { createSecondWindow, closeSecondWindow };
};