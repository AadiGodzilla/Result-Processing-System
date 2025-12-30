import { useNavigate, type NavigateFunction } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import ModifyPopUp from "../../Popups/ModifyPopUp/ModifyPopUp";
import {
    type PopupStateContextType,
    PopupStateContext,
} from "../../Contexts/PopupContext";
import AddPopup from "../../Popups/AddPopup/AddPopup";
import {
    type ResultDataType,
    ResultModifyContext,
    type ResultModifyContextType,
} from "../../Contexts/ResultModifyData";
import ResultModifyPopup from "../../Popups/Result/Modify/ResultModifyPopup";
import AddResultPopup from "../../Popups/Result/Add/AddResultPopup";
import axios from "axios";
import removeDuplicate from "../../Utils/unique";
import type { StudentData } from "../../Contexts/StudentDataContext";

type ActivePopup =
    | "modify"
    | "add"
    | "remove"
    | "resultModify"
    | "addResult"
    | "none";

type NameListProp = {
    symbolNo: number;
    name: string;
};

export type ResultData = {
    id: number;
    subjectCode: string;
    mark: number;
    semester: number;
    StudentSymbolNo: number;
};

type ResultTable = {
    id: number;
    subCode: string;
    mark: number;
};

function HomePage() {
    const navigate: NavigateFunction = useNavigate();

    const popupState = useContext<PopupStateContextType | undefined>(
        PopupStateContext
    );
    const resultModifyData = useContext<ResultModifyContextType | undefined>(
        ResultModifyContext
    );

    const mainDivRef = useRef<HTMLDivElement>(null);
    const tableRefs = useRef<(HTMLTableElement | null)[]>([]);
    tableRefs.current = [];

    const [activePopup, setActivePopup] = useState<ActivePopup>("none");

    const programs = ["BCA", "BHM", "BBS", "BBA"];
    const batches = [2024, 2023, 2022, 2021, 2020, 2019];

    const [program, setProgram] = useState<string | undefined>();
    const [batch, setBatch] = useState<number | undefined>();
    const [nameList, setNameList] = useState<NameListProp[] | null>();
    const [student, setStudent] = useState<StudentData>();
    const [results, setResults] = useState<Record<number, ResultTable[]>>({});

    useEffect(() => {
        if (popupState?.isOpen) {
            mainDivRef.current!.style.filter = "brightness(0.5)";
            mainDivRef.current!.style.pointerEvents = "none";
        } else {
            mainDivRef.current!.style.filter = "none";
            mainDivRef.current!.style.pointerEvents = "auto";
        }
    }, [popupState?.isOpen]);

    const popups = {
        modify: <ModifyPopUp data={student!} />,
        add: <AddPopup />,
        remove: "",
        resultModify: <ResultModifyPopup />,
        addResult: <AddResultPopup symbolNo={student?.symbolNo!} />,
        none: "",
    };

    const handleModifyClick = (index: number) => {
        const subjectCodes = Array.from(
            tableRefs.current[index - 1]!.children[0].children[0].children
        );
        const marks = Array.from(
            tableRefs.current[index - 1]!.children[1].children[0].children
        );

        const res = [];

        for (let i = 1; i < subjectCodes.length; i++) {
            const subjectCodeVal = subjectCodes[i].innerHTML;
            const marksVal = parseInt(marks[i].innerHTML);
            const temp: ResultDataType = {
                id: parseInt(subjectCodes[i].id),
                subjectCode: subjectCodeVal,
                marks: marksVal,
                semester: index,
                symbolNo: student!.symbolNo,
            };
            res.push(temp);
        }
        resultModifyData?.setValues(res);
        popupState?.setOpen(true);
        setActivePopup("resultModify");
    };

    const handleSearch = () => {
        axios
            .get(
                `http://localhost:5000/student?program=${program}&batch=${batch}`
            )
            .then((res) => setNameList(res.data));
    };

    const handleNameListClick = (sym: number) => {
        axios.get(`http://localhost:5000/student?sym=${sym}`).then((res) => {
            const s: StudentData = res.data;
            setStudent(res.data);
            const sems = new Array();
            s.Results.forEach((item) => sems.push(item.semester));
            removeDuplicate(sems).forEach((sem: number) => {
                const temp: ResultTable[] = [];
                s.Results.forEach((item) => {
                    if (item.semester === sem) {
                        temp.push({
                            id: item.id,
                            subCode: item.subjectCode,
                            mark: item.mark,
                        });
                    }
                });
                setResults((prev) => ({ ...prev, [sem]: temp }));
            });
            Object.entries(results!).forEach(([key, value]) => {
                console.log(key, value);
            });
        });
    };

    return (
        <>
            {popups[activePopup]}
            <div className={styles.main} ref={mainDivRef}>
                <div className={styles.header}>
                    <div className={styles.logo}>RESULT PROCESSING SYSTEM</div>
                    <div
                        className={styles.account_holder}
                        onClick={() => navigate("/login")}
                    >
                        <img
                            src="/src/assets/react.svg"
                            className={styles.account_image}
                        />
                        <div className={styles.account_info}>
                            <h3 className={styles.account_name}>
                                AADIKSHAR BHANDARI
                            </h3>
                            <h5 className={styles.account_status}>STUDENT</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.operations_box}>
                    <div className={styles.search}>
                        <select
                            name=""
                            id=""
                            onChange={(e) => setProgram(e.target.value)}
                        >
                            <option value="">Program</option>
                            {programs.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                        <select
                            onChange={(e) => setBatch(parseInt(e.target.value))}
                        >
                            <option value="">Batch</option>
                            {batches.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                        <button onClick={handleSearch}>SEARCH</button>
                    </div>
                    <div className={styles.operations}>
                        <button>REMOVE</button>
                        <button
                            onClick={() => {
                                popupState?.setOpen(!popupState?.isOpen);
                                setActivePopup("modify");
                            }}
                        >
                            MODIFY
                        </button>
                        <button
                            onClick={() => {
                                popupState?.setOpen(!popupState?.isOpen);
                                setActivePopup("add");
                            }}
                        >
                            ADD
                        </button>
                    </div>
                </div>
                <div className={styles.main_container}>
                    <div className={styles.name_list}>
                        <h3>NAME LIST</h3>
                        {nameList?.map((item) => (
                            <button
                                className={styles.name_list_btn}
                                onClick={() =>
                                    handleNameListClick(item.symbolNo)
                                }
                            >
                                {item.name.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <div className={styles.main_body}>
                        <div className={styles.body_info}>
                            <h1>Information</h1>
                            <p>Name: {student?.name}</p>
                            <p>Program: {student?.program}</p>
                            <p>Batch: {student?.batch}</p>
                            <p>Date of Birth: {student?.dob.toString()}</p>
                            <p>TU Registration ID: {student?.TUID}</p>
                            <p>Father's Name: {student?.fatherName}</p>
                            <p>Mother's Name: {student?.motherName}</p>
                            <p>Mobile Number: {student?.mobileNumber}</p>
                            <p>Home Address: {student?.address}</p>
                        </div>
                        <div className={styles.body_photo}>
                            <h1 style={{ textAlign: "center" }}>Photo</h1>
                            <div className={styles.photo_frame}></div>
                            <p>Symbol No.: {student?.symbolNo}</p>
                        </div>
                        <div className={styles.body_result}>
                            <div className={styles.result_header}>
                                <h1>Results</h1>
                                <div className={styles.result_operation}>
                                    <button
                                        className={styles.result_add_btn}
                                        onClick={() => {
                                            popupState?.setOpen(true);
                                            setActivePopup("addResult");
                                        }}
                                    >
                                        ADD
                                    </button>
                                </div>
                            </div>
                            {Object.entries(results!).map(([key, value]) => (
                                <div className={styles.result_item}>
                                    <div className={styles.result_header}>
                                        <h4 className={styles.result_title}>
                                            Semester {key}
                                        </h4>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "8px",
                                            }}
                                        >
                                            <button
                                                className={
                                                    styles.result_modify_btn
                                                }
                                                onClick={() => {
                                                    handleModifyClick(
                                                        parseInt(key)
                                                    );
                                                }}
                                            >
                                                MODIFY
                                            </button>
                                            <button
                                                className={
                                                    styles.result_delete_btn
                                                }
                                            >
                                                DELETE
                                            </button>
                                        </div>
                                    </div>
                                    <table
                                        width={"100%"}
                                        border={1}
                                        className={styles.result}
                                        ref={(element) => {
                                            tableRefs.current[
                                                parseInt(key) - 1
                                            ] = element;
                                        }}
                                    >
                                        <thead>
                                            <tr>
                                                <th> Subjects(Code)</th>
                                                {value.map((item) => (
                                                    <th id={item.id.toString()}>
                                                        {item.subCode}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Marks</td>
                                                {value.map((item) => (
                                                    <td>{item.mark}</td>
                                                ))}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
