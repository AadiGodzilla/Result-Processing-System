import type { ReactNode } from "react";
import styles from "./Popup.module.css";

type PopUpProps = {
    onClose: () => void;
    title: string;
    children: ReactNode;
};

function Popup(props: PopUpProps) {
    return (
        <>
            <div className={styles.popup}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <button
                        className={styles.close}
                        onClick={() => props.onClose()}
                    >
                        CLOSE
                    </button>
                </div>
                {props.children}
            </div>
        </>
    );
}

export default Popup;
