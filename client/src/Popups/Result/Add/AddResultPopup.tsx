import { useState } from "react";
import Popup from "../../Base/Popup";
import styles from "./AddResultPopup.module.css";
import axios from "axios";

type AddFieldProp = {
    subjectCode: string;
    mark: number;
    semester: number;
    StudentSymbolNo: number;
};

type AddPopupProp = {
    symbolNo: number;
};

export default function AddResultPopup(props: AddPopupProp) {
    const [inputStates, setInputStates] = useState<AddFieldProp[]>([
        {
            subjectCode: "",
            mark: 0,
            semester: 0,
            StudentSymbolNo: props.symbolNo,
        },
    ]);

    const addField = () => {
        const newField: AddFieldProp = {
            subjectCode: "",
            mark: 0,
            semester: 0,
            StudentSymbolNo: props.symbolNo,
        };
        setInputStates((prev) => [...prev, newField]);
    };

    const removeField = () => {
        setInputStates(inputStates.slice(0, -1));
    };

    const handleSubmit = () => {
        console.log(inputStates);
        axios.post("http://localhost:5000/student/result", inputStates);
    };

    return (
        <>
            <Popup
                title="ADD RESULT"
                style={styles.popup}
                ok={
                    <>
                        <button onClick={handleSubmit}>ADD</button>
                    </>
                }
            >
                <table
                    className={styles.addTable}
                    style={{
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th>Marks</th>
                            <th>Semester</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputStates.map((item, index) => (
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        value={item.subjectCode}
                                        onChange={(e) => {
                                            setInputStates(
                                                inputStates.map((elem, i) =>
                                                    i === index
                                                        ? {
                                                              ...elem,
                                                              subjectCode:
                                                                  e.target
                                                                      .value,
                                                          }
                                                        : elem
                                                )
                                            );
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.mark}
                                        onChange={(e) => {
                                            setInputStates(
                                                inputStates.map((elem, i) =>
                                                    i === index
                                                        ? {
                                                              ...elem,
                                                              mark: Number.isNaN(
                                                                  parseInt(
                                                                      e.target
                                                                          .value
                                                                  )
                                                              )
                                                                  ? 0
                                                                  : parseInt(
                                                                        e.target
                                                                            .value
                                                                    ),
                                                          }
                                                        : elem
                                                )
                                            );
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={item.semester}
                                        onChange={(e) => {
                                            setInputStates(
                                                inputStates.map((elem, i) =>
                                                    i === index
                                                        ? {
                                                              ...elem,
                                                              semester:
                                                                  Number.isNaN(
                                                                      parseInt(
                                                                          e
                                                                              .target
                                                                              .value
                                                                      )
                                                                  )
                                                                      ? 0
                                                                      : parseInt(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        ),
                                                          }
                                                        : elem
                                                )
                                            );
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={addField}>ADD ROW</button>
                <button onClick={removeField}>REMOVE ROW</button>
            </Popup>
        </>
    );
}
