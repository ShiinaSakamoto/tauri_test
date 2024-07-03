import styles from "./DropdownMenu.module.scss";

import clsx from "clsx";

import { useOpenedDropdownMenu } from "@store";

export const DropdownMenu = (props) => {

    const { updateOpenedDropdownMenu, currentOpenedDropdownMenu } = useOpenedDropdownMenu();
    const openDropdownMenu = () => {
        updateOpenedDropdownMenu(props.container_id);
    };

    const selectValue = (key) => {
        updateOpenedDropdownMenu("");
        console.log(key);
    };

    const dropdown_content_wrapper_class_name = clsx(styles["dropdown_content_wrapper"], {
        [styles["is_opened"]]: (currentOpenedDropdownMenu === props.container_id) ? true : false
    });

    return (
        <div className={styles.container}>
            <div className={styles.dropdown_toggle_button} onClick={openDropdownMenu}>
                <p className={styles.dropdown_selected_text}>{props.list[props.selected_id]}</p>
            </div>
            <div className={dropdown_content_wrapper_class_name}>
                <div className={styles.dropdown_content}>
                    {
                        Object.entries(props.list).map(([key, value]) => {
                            return (
                                <div key={key} className={styles.value_button} onClick={() => selectValue({container_id: props.container_id, value_id: key})}>
                                    <p className={styles.value_text} >{value}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};