import { Router } from "express";
import StudentController from "../controllers/studentController.js";
import { verifyToken } from "../middleware/jwtVerify.js";
import ResultController from "../controllers/resultController.js";
import Student from "../models/student.js";

const studentRouter = Router();

studentRouter.post("/student/", StudentController.createStudent);
studentRouter.get("/student/", StudentController.getStudentData);
studentRouter.post("/student/result/", ResultController.addResult);
studentRouter.put("/student/", StudentController.updateStudent);
studentRouter.put("/student/result/", ResultController.updateResult);

export default studentRouter;
