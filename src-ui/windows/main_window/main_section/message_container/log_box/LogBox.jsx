import styles from "./LogBox.module.scss";
import { useAtomValue } from "jotai";


import { sentMessageList } from "@store";

export const LogBox = () => {
    const sent_message_list = useAtomValue(sentMessageList);
    return (
        <div className={styles.container}>
            <p>Log Box</p>
            {sent_message_list.map(sent_message => {
                return <p className={styles.text} key={crypto.randomUUID()}>{sent_message}</p>;
            })}
        </div>
    );
}