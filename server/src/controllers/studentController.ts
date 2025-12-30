import type { Request, Response } from "express";
import StudentService from "../services/studentService.js";
import type Student from "../models/student.js";

type StudentParams = {
    program: string;
    batch: number;
    sym: number;
};

const StudentController = {
    async createStudent(req: Request<{}, {}, Student>, res: Response) {
        try {
            const student = req.body;
            console.log(student);
            await StudentService.createStudent(student);
            res.status(200).json({ message: "Student Created Successfully" });
        } catch (error) {
            const e = error as Error;
            res.status(500).json({ message: e.message });
        }
    },

    async getStudentData(
        req: Request<{}, {}, {}, StudentParams>,
        res: Response
    ) {
        try {
            const { program, batch, sym } = req.query;
            if (sym && (!program || !batch)) {
                const student = await StudentService.getStudentBySymbol(sym);
                res.status(200).json(student);
            } else if (program && batch && !sym) {
                const nameList = await StudentService.getStudentNameList(
                    program,
                    batch
                );
                res.status(200).json(nameList);
            } else {
                const students = await StudentService.getAllStudents();
                res.status(200).json(students);
            }
        } catch (error) {
            const e = error as Error;
            res.status(500).json({ message: e.message });
        }
    },
    async updateStudent(
        req: Request<{}, {}, Student, { sym: number }>,
        res: Response
    ) {
        try {
            const { sym } = req.query;
            const student = req.body;
            await StudentService.updateStudent(student, sym);
            res.status(200).send("Student Updated Successfully");
        } catch (error) {
            const e = error as Error;
            res.status(500).json({ message: e.message });
        }
    },
};

export default StudentController;
