export type ResultBody = {
    subjectCode: string;
    mark: number;
    semester: number;
    StudentSymbolNo: number;
};

export type UpdateResult = {
    id: number;
    mark: number;
    subjectCode: string;
    semester: number;
};
