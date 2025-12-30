import { Router } from "express";
import { UserController } from "../controllers/userController.js";
const userRouter = Router();

userRouter.post("user/", UserController.createUser);
userRouter.post("user/login", UserController.login);

export default userRouter;
