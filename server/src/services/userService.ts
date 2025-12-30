import StudentRepository from "../repositories/studentRepo.js";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/userRepo.js";
import User from "../models/users.js";
import { APIError } from "../types/error.js";

type LoginDetails = {
    email: string;
    password: string;
};

export const UserService = {
    async createUser(user: User) {
        try {
            return await UserRepository.createUser(user);
        } catch (error) {
            throw error;
        }
    },

    async login(data: LoginDetails) {
        const userDetails = await UserRepository.getUserByEmail(data.email);

        if (!userDetails) throw new APIError("LoginError", "User Not Found", 404);

        if (userDetails.password != data.password)
            throw new APIError("LoginError", "Incorrect Password", 401);

        const payload = {
            username: userDetails.username,
            email: userDetails.email,
        };

        return jwt.sign(payload, process.env.SECRET_KEY);
    },
};
