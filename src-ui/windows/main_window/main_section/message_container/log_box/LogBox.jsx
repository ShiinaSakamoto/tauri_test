import styles from "./LogBox.module.scss";

import { useSentMessageList } from "@store";

export const LogBox = () => {
    const { currentSentMessageList } = useSentMessageList();
    return (
        <div className={styles.container}>
            <p>Log Box</p>
            {currentSentMessageList.map(sent_message => {
                return <p className={styles.text} key={crypto.randomUUID()}>{sent_message}</p>;
            })}
        </div>
    );
};