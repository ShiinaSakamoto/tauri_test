import styles from "./MainSection.module.scss";

import { TopBar } from "./top_bar/TopBar";
import { MessageContainer } from "./message_container/MessageContainer";

export const MainSection = () => {
    return (
        <div className={styles["container"]}>
            <TopBar />
            <MessageContainer />
        </div>
    );
}