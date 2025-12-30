import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../config/database.js";
import Result from "./result.js";

class Student extends Model<
    InferAttributes<Student>,
    InferCreationAttributes<Student>
> {
    declare symbolNo: number;
    declare name: string;
    declare program: string;
    declare batch: number;
    declare dob: Date;
    declare TUID: string;
    declare fatherName: string;
    declare motherName: string;
    declare mobileNumber: number;
    declare address: string;
}

Student.init(
    {
        symbolNo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: "symbol_no",
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "student_name",
        },
        program: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "program",
        },
        batch: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "batch",
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "date_of_birth",
        },
        TUID: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "TU_Registration_ID",
            unique: true,
        },
        fatherName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "father_name",
        },
        motherName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "mother_name",
        },
        mobileNumber: {
            type: DataTypes.BIGINT,
            allowNull: false,
            field: "mobile_number",
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "address",
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: "students",
    }
);

export default Student;
