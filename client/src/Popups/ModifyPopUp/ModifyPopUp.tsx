import Popup from "../Base/Popup";
import styles from "./ModifyPopUp.module.css";

type ModifyPopUpProps = {
    onClose: () => void;
};

function ModifyPopUp(props: ModifyPopUpProps) {
    return (
        <>
            <Popup title="Modify" onClose={() => props.onClose()}>
                <h1>Modify Popup</h1>
            </Popup>
        </>
    );
}

export default ModifyPopUp;
