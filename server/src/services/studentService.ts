import Student from "../models/student.js";
import StudentRepository from "../repositories/studentRepo.js";

const StudentService = {
    async createStudent(student: Student) {
        return await StudentRepository.createStudent(student);
    },
    async getAllStudents() {
        try {
            return await StudentRepository.getAllStudents();
        } catch (error) {
            const e = error as Error;
            console.error(`${e.name}: ${e.message}`);
            throw e;
        }
    },

    async getStudentBySymbol(symbolNo: number) {
        try {
            return await StudentRepository.getStudentBySymbol(symbolNo);
        } catch (error) {
            const e = error as Error;
            console.error(`${e.name}: ${e.message}`);
            throw e;
        }
    },

    async getStudentByProgram(program: string) {
        try {
            return await StudentRepository.getStudentByProgram(program);
        } catch (error) {
            const e = error as Error;
            console.error(`${e.name}: ${e.message}`);
            throw e;
        }
    },

    async getStudentByBatch(batch: number) {
        try {
            return await StudentRepository.getStudentByBatch(batch);
        } catch (error) {
            const e = error as Error;
            console.error(`${e.name}: ${e.message}`);
            throw e;
        }
    },

    async getStudentByProgramAndBatch(program: string, batch: number) {
        try {
            return await StudentRepository.getStudentByProgramAndBatch(
                program,
                batch
            );
        } catch (error) {
            const e = error as Error;
            console.error(`${e.name}: ${e.message}`);
            throw e;
        }
    },

    async getStudentNameList(program: string, batch: number) {
        try {
            return await StudentRepository.getStudentNameList(program, batch);
        } catch (error) {
            const e = error as Error;
            console.error(`${e.name}: ${e.message}`);
            throw e;
        }
    },

    async updateStudent(student: Student, symbolNo: number) {
        await StudentRepository.updateStudentOnSymbolNo(student, symbolNo);
    },
};

export default StudentService;
