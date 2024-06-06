import { store } from "@store";
let count = 0
const asyncSendMessage = async (value) => {
    console.log(value);
    // send to python
    const child = store.child;
    if (child) {
        // await child.write(value).then((result) => {
        await child.write(value + "\n").then((result) => {
            count+=1
            console.log("send count", count);
        }).catch((err) => {
            console.log(err)
        });
    }
}

export {asyncSendMessage};