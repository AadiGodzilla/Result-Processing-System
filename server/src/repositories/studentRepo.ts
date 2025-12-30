import Result from "../models/result.js";
import Student from "../models/student.js";

const StudentRepository = {
    async createStudent(student: Student) {
        return await Student.create(student);
    },

    async getAllStudents() {
        return await Student.findAll({ include: [Result] });
    },

    async getStudentBySymbol(symbolNo: number) {
        return await Student.findByPk(symbolNo, { include: [Result] });
    },

    async getStudentByProgram(program: string) {
        return await Student.findAll({
            where: {
                program: program,
            },
        });
    },

    async getStudentByBatch(batch: number) {
        return await Student.findAll({
            where: {
                batch: batch,
            },
        });
    },

    async getStudentByProgramAndBatch(program: string, batch: number) {
        return await Student.findAll({
            where: {
                program: program,
                batch: batch,
            },
        });
    },

    async getStudentNameList(program: string, batch: number) {
        return await Student.findAll({
            where: {
                program: program,
                batch: batch,
            },
            attributes: ["symbolNo", "name"],
        });
    },

    async updateStudentOnSymbolNo(student: Student, symbolNo: number) {
        await Student.update(student, { where: { symbolNo: symbolNo } });
    },
};

export default StudentRepository;
