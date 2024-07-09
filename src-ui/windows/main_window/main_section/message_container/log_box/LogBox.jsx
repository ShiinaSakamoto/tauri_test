import styles from "./LogBox.module.scss";
import { useMessageLogs } from "@store";
import { MessageContainer } from "./message_container/MessageContainer";

export const LogBox = () => {
    const { currentMessageLogs } = useMessageLogs();

    return (
        <div className={styles.container}>
            {currentMessageLogs.map(message_data => {
                return <MessageContainer key={message_data.id} {...message_data} />;
            })}
        </div>
    );
};