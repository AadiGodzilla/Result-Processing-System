import express, {
    type Express,
    type Request,
    type RequestHandler,
    type Response,
} from "express";
import dotenv from "dotenv";
import path from "path";
import studentRouter from "./routes/studentRoutes.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import { connectDB } from "./config/database.js";
import Student from "./models/student.js";
import Result from "./models/result.js";
import cors from "cors";

dotenv.config({ path: path.join(path.resolve(), "/.env") });

const app: Express = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(userRouter);
app.use(studentRouter);

Student.hasMany(Result);
Result.belongsTo(Student);

connectDB();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

app.listen(PORT, () => {
    console.log(`Server Running in http://localhost:${PORT}`);
});
