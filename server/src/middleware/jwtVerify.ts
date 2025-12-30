import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import type User from "../models/users.js";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.sendStatus(401);

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) return res.sendStatus(403);
            next();
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
}
