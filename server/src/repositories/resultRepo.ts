import { Op } from "sequelize";
import Result from "../models/result.js";

type UpdateResult = {
    id: number;
    subCode: string;
    mark: number;
    semester: number;
};

const ResultRepository = {
    async addResult(result: Result[]) {
        return await Result.bulkCreate(result);
    },

    async getResultsFromSymbolNo(symbolNo: number) {
        return await Result.findAll();
    },

    async getResultFromSemester(semester: number) {
        return await Result.findAll({ where: { semester: semester } });
    },

    async updateResult(results: UpdateResult[]) {
        results.forEach(async (item) => {
            await Result.update(
                {
                    subjectCode: item.subCode,
                    mark: item.mark,
                    semester: item.semester,
                },
                {
                    where: { id: item.id },
                }
            );
        });
    },
};

export default ResultRepository;
