import styles from "./LogBox.module.scss";
import { useAtomValue } from "jotai";


import { sentMessageList } from "@store";

export const LogBox = () => {
    const sent_message_list = useAtomValue(sentMessageList);
    // console.log(sent_message_list);
    // sent_message_list.map(sent_message => console.log(sent_message));
    return (
        <div className={styles["container"]}>
            <p>Log Box</p>
            {sent_message_list.map(sent_message => {
                return <p key={crypto.randomUUID()}>{sent_message}</p>;
            })}
        </div>
    )
}