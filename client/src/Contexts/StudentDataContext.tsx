import axios from "axios";
import { createContext, type ReactNode } from "react";

export type ResultData = {
    id: number;
    subjectCode: string;
    mark: number;
    semester: number;
    StudentSymbolNo: number;
};

export type StudentData = {
    symbolNo: number;
    name: string;
    program: string;
    batch: number;
    dob: Date;
    TUID: string;
    fatherName: string;
    motherName: string;
    mobileNumber: number;
    address: string;
    Results: ResultData[];
};

export const StudentDataContext = createContext<StudentData | null>(null);

type ChildNode = {
    children: ReactNode;
};

export function StudentDataProvider(props: ChildNode) {
    let data: StudentData | null = null;
    axios.get("http://localhost:5000/student").then((res) => (data = res.data));

    return (
        <>
            <StudentDataContext.Provider value={data}>
                {props.children}
            </StudentDataContext.Provider>
        </>
    );
}
