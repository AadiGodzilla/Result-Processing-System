import { useContext, useEffect, useRef, type ReactNode } from "react";
import styles from "./Popup.module.css";
import {
    PopupStateContext,
    type PopupStateContextType,
} from "../../Contexts/PopupContext";

type PopUpProps = {
    title?: string;
    children?: ReactNode;
    style?: CSSModuleClasses[string];
    ok?: ReactNode;
};

function Popup(props: PopUpProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    const popupState = useContext<PopupStateContextType | undefined>(
        PopupStateContext
    );

    const handleClick = () => {
        popupState?.setOpen(!popupState?.isOpen);
    };

    useEffect(() => {
        if (popupState?.isOpen) popupRef.current!.style.visibility = "visible";
        else popupRef.current!.style.visibility = "hidden";
    }, [popupState?.isOpen]);

    return (
        <>
            <div className={`${styles.popup} ${props.style}`} ref={popupRef}>
                <div className={styles.header}>
                    <div className={styles.spacer}>{props.ok}</div>
                    <h1 className={styles.title}>{props.title}</h1>
                    <div className={styles.spacer}>
                        <button className={styles.close} onClick={handleClick}>
                            CLOSE
                        </button>
                    </div>
                </div>
                {props.children}
            </div>
        </>
    );
}

export default Popup;
