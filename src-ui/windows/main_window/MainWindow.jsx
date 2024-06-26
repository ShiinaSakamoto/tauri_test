import { useResizable } from "react-resizable-layout";

import styles from "./MainWindow.module.scss";

import { Logo } from "./logo/Logo";
import { MainFunctionSwitch } from "./main_function_switch/MainFunctionSwitch";
import { LanguageSettings } from "./language_settings/LanguageSettings";
import { OpenSettings } from "./open_settings/OpenSettings";

import { TopBar } from "./top_bar/TopBar";
import { LogBox } from "./log_box/LogBox";
import { MessageBox } from "./message_box/MessageBox";

export const MainWindow = () => {
    const { isDragging, position, separatorProps } = useResizable({
        axis: "y",
        initial: 150,
        min: 52,
        reverse: true
    });

    return (
        <div className={styles["container"]}>
            <div className={styles["sidebar_section"]}>
                <Logo />
                <MainFunctionSwitch />
                <LanguageSettings />
                <OpenSettings />
            </div>
            <div className={styles["main_section"]}>
                <TopBar />
                <div className={styles["message_container"]}>
                    <LogBox />
                    <Separator
                        dir={"horizontal"}
                        isDragging={isDragging}
                        {...separatorProps}
                    />
                    <div className={styles["message_box_wrapper"]} style={ { height: `${(position / 10) - 1.5 }rem` } }>
                        <MessageBox />
                    </div>
                </div>
            </div>
        </div>
    )
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