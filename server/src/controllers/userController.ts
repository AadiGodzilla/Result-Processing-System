import { type Request, type Response } from "express";
import { UserService } from "../services/userService.js";
import type { APIError } from "../types/error.js";

type UserLoginRequest = {
    email: string;
    password: string;
};

export const UserController = {
    async createUser(req: Request, res: Response) {
        try {
            const user = req.body;
            const newUser = await UserService.createUser(user);
            res.status(201).json({ user: newUser });
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },

    async login(req: Request<{}, {}, UserLoginRequest>, res: Response) {
        try {
            const token = await UserService.login(req.body);
            res.status(201).json({ token: token });
        } catch (error: unknown) {
            const e = error as APIError;
            console.error(e);
            res.status(e.status).send(`${e.name}: ${e.message}`);
        }
    },
};
