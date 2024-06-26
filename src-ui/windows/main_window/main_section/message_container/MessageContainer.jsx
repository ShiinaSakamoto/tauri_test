import { useResizable } from "react-resizable-layout";

import styles from "./MessageContainer.module.scss";

import { LogBox } from "./log_box/LogBox";
import { MessageInputBox } from "./message_input_box/MessageInputBox";

export const MessageContainer = () => {
    const { isDragging, position, separatorProps } = useResizable({
        axis: "y",
        initial: 150,
        min: 52,
        reverse: true
    });

    return (
        <div className={styles["container"]}>
            <LogBox />
            <Separator
                dir={"horizontal"}
                isDragging={isDragging}
                {...separatorProps}
            />
            <div className={styles["message_box_resize_wrapper"]} style={ { height: `${(position / 10) - 1.5 }rem` } }>
                <MessageInputBox />
            </div>
        </div>
    );
}

const Separator = ({ id, dir, isDragging, ...props }) => {
    // const [isFocused, setIsFocused] = useState(false)
    // console.log(isDragging);

    return (
        <div
            // id={id}
            // data-testid={id}
            tabIndex={0}
            // className={cn(
            //   'sample-drag-bar',
            //   dir === 'horizontal' && 'sample-drag-bar--horizontal',
            //   (isDragging || isFocused) && 'sample-drag-bar--dragging'
            // )}
            // onFocus={() => setIsFocused(true)}
            // onBlur={() => setIsFocused(false)}
            className={styles["separator"]}
            {...props}
        />
    )


    // console.log(separatorProps);
    // return <div className={styles["separator"]} {...separatorProps }></div>;
};