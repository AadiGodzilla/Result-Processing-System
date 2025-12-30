import Popup from "../Base/Popup";
import styles from "./AddPopup.module.css";

function AddPopup() {
    return (
        <>
            <Popup title="ADD POPUP">
                <div className={styles.add_body}>
                    <div className={styles.inputDiv}>
                        <div className={styles.subDiv}>
                            <div className={styles.formField}>
                                <label htmlFor="">Symbol No: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Student Name: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Program: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Batch: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Date of Birth: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">TU Registration: </label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className={styles.subDiv}>
                            <div className={styles.formField}>
                                <label htmlFor="">Father's Name: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Mother's Name: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Mobile Number: </label>
                                <input type="text" />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Address: </label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    );
}

export default AddPopup;
