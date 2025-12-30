import { useContext, useEffect, useState, type ChangeEvent } from "react";
import Popup from "../../Base/Popup";
import {
    ResultModifyContext,
    type ResultModifyContextType,
} from "../../../Contexts/ResultModifyData";
import styles from "./ResultModifyPopup.module.css";
import axios from "axios";
import {
    PopupStateContext,
    type PopupStateContextType,
} from "../../../Contexts/PopupContext";

function ResultModifyPopup() {
    const resultData = useContext<ResultModifyContextType | undefined>(
        ResultModifyContext
    );

    const popupState = useContext<PopupStateContextType | undefined>(
        PopupStateContext
    );

    const [ids, setIds] = useState<number[]>([]);
    const [subStates, setSubStates] = useState<string[]>([]);
    const [markStates, setMarkStates] = useState<string[]>([]);
    const [semStates, setSemStates] = useState<number[]>([]);

    const [modifyData, setModifyData] = useState();

    useEffect(() => {
        setIds([]);
        setSubStates([]);
        setMarkStates([]);
        setSemStates([]);

        resultData?.values.forEach((item) => {
            setSubStates((prev) => [...prev, item.subjectCode]);
            setMarkStates((prev) => [...prev, item.marks.toString()]);
            setSemStates((prev) => [...prev, item.semester]);
            setIds((prev) => [...prev, item.id]);
        });
    }, [resultData?.values || popupState?.isOpen]);

    const handleSubjectCodeChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        setSubStates(
            subStates.map((item, i) => (i === index ? e.target.value : item))
        );
    };

    const handleMarkChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        setMarkStates(
            markStates.map((item, i) => (i === index ? e.target.value : item))
        );
    };

    const handleSemChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        setSemStates(
            semStates.map((item, i) => {
                if (i === index) {
                    if (Number.isNaN(parseInt(e.target.value))) return 0;
                    else return parseInt(e.target.value);
                }
                return item;
            })
        );
    };

    const handleModifyClick = () => {
        const modified = [];
        for (let i = 0; i < subStates.length; i++) {
            modified.push({
                id: ids[i],
                subCode: subStates[i],
                mark: markStates[i],
                semester: semStates[i],
            });
        }
        console.log(modified);
        axios.put("http://localhost:5000/student/result", modified);
    };

    return (
        <>
            <Popup
                title="MODIFY RESULT"
                style={styles.res_m}
                ok={
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
                            onClick={handleModifyClick}
                        >
                            MODIFY
                        </button>
                    </>
                }
            >
                <div className={styles.main}>
                    <table className={styles.resultTable}>
                        <thead>
                            <tr>
                                <th>Subject Code</th>
                                <th>Marks</th>
                                <th>Semester</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultData?.values.map((_, index) => (
                                <>
                                    <tr>
                                        <td>
                                            <input
                                                value={subStates[index]}
                                                onChange={(e) =>
                                                    handleSubjectCodeChange(
                                                        e,
                                                        index
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                value={markStates[index]}
                                                onChange={(e) =>
                                                    handleMarkChange(e, index)
                                                }
                                            />
                                        </td>
                                        <td>
                                            <input
                                                value={semStates[index]}
                                                onChange={(e) =>
                                                    handleSemChange(e, index)
                                                }
                                            />
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Popup>
        </>
    );
}

export default ResultModifyPopup;
