import { resumeToPipeableStream } from "react-dom/server";
import Popup from "../Base/Popup";
import styles from "./ModifyPopUp.module.css";
import type { StudentData } from "../../Contexts/StudentDataContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    type PopupStateContextType,
    PopupStateContext,
} from "../../Contexts/PopupContext";

function ModifyButton(props: { onClick: () => void }) {
    return (
        <>
            <button
                style={{
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bold",
                    padding: "0.75rem",
                    borderRadius: 8,
                    border: "none",
                }}
                onClick={props.onClick}
            >
                MODIFY
            </button>
        </>
    );
}

type ModifyPopUpProp = {
    data: StudentData;
};

function ModifyPopUp(props: ModifyPopUpProp) {
    const [studentData, setStudentData] = useState<StudentData>(props.data);

    const popupState = useContext<PopupStateContextType | undefined>(
        PopupStateContext
    );

    const handleModifyClick = () => {
        axios.put("http://localhost:5000/student/", studentData);
    };

    useEffect(() => {
        setStudentData(props.data);
    }, [popupState?.isOpen]);

    return (
        <>
            <Popup
                title="MODIFY"
                style={styles.parent}
                ok={<ModifyButton onClick={handleModifyClick} />}
            >
                <div className={styles.modify_body}>
                    <div className={styles.inputDiv}>
                        <div className={styles.subDiv}>
                            <div className={styles.formField}>
                                <label htmlFor="">Symbol No: </label>
                                <input
                                    type="text"
                                    value={studentData.symbolNo}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            symbolNo: parseInt(e.target.value),
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Student Name: </label>
                                <input
                                    type="text"
                                    value={studentData.name}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            name: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Program: </label>
                                <input
                                    type="text"
                                    value={studentData.program}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            program: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Batch: </label>
                                <input
                                    type="text"
                                    value={studentData.batch}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            batch: parseInt(e.target.value),
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Date of Birth: </label>
                                <input
                                    type="text"
                                    value={studentData.dob.toString()}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            dob: new Date(e.target.value),
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">TU Registration: </label>
                                <input
                                    type="text"
                                    value={studentData.TUID}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            TUID: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                        <div className={styles.subDiv}>
                            <div className={styles.formField}>
                                <label htmlFor="">Father's Name: </label>
                                <input
                                    type="text"
                                    value={studentData.fatherName}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            fatherName: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Mother's Name: </label>
                                <input
                                    type="text"
                                    value={studentData.motherName}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            motherName: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Mobile Number: </label>
                                <input
                                    type="text"
                                    value={studentData.mobileNumber}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            mobileNumber: parseInt(
                                                e.target.value
                                            ),
                                        }))
                                    }
                                />
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="">Address: </label>
                                <input
                                    type="text"
                                    value={studentData.address}
                                    onChange={(e) =>
                                        setStudentData((prev) => ({
                                            ...prev,
                                            address: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    );
}

export default ModifyPopUp;
