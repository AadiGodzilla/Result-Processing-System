import type Result from "../models/result.js";
import ResultRepository from "../repositories/resultRepo.js";
import type { UpdateResult } from "../types/result.js";

const ResultService = {
    async createResult(result: Result[]) {
        return await ResultRepository.addResult(result);
    },

    async updateResult(result: UpdateResult[]) {},
};

export default ResultService;
