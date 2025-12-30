import Result from "../models/result.js";
import Student from "../models/student.js";
import User from "../models/users.js";

const UserRepository = {
    async createUser(user: User) {
        return await User.create(user);
    },

    async getUserByEmail(email: string) {
        return await User.findOne({
            where: {
                email: email,
            },
        });
    },
};

export default UserRepository;
