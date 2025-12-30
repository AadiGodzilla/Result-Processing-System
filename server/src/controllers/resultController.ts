import type Result from "../models/result.js";
import { type Request, type Response } from "express";
import ResultService from "../services/resultService.js";
import type { ResultBody, UpdateResult } from "../types/result.js";

const ResultController = {
    async addResult(req: Request<{}, {}, Result[]>, res: Response) {
        try {
            const result = req.body;
            const response = await ResultService.createResult(result);
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },

    async updateResult(req: Request<{}, {}, UpdateResult[]>, res: Response) {
        try {
            const result = req.body;
            const response = await ResultService.updateResult(result);
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },
};

export default ResultController;
