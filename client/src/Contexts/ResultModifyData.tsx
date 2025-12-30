import { createContext, useState, type ReactNode } from "react";

export type ResultDataType = {
    id: number;
    symbolNo: number;
    subjectCode: string;
    marks: number;
    semester: number;
};

export type ResultModifyContextType = {
    values: ResultDataType[];
    setValues: (state: ResultDataType[]) => void;
};

export const ResultModifyContext = createContext<
    ResultModifyContextType | undefined
>(undefined);

type ChildProp = {
    children: ReactNode;
};

export function ResultModifyDataProvider(props: ChildProp) {
    const [values, setValues] = useState<ResultDataType[]>([]);

    return (
        <ResultModifyContext.Provider value={{ values, setValues }}>
            {props.children}
        </ResultModifyContext.Provider>
    );
}
