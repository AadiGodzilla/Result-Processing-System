import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../config/database.js";
import Student from "./student.js";

class Result extends Model<
    InferAttributes<Result>,
    InferCreationAttributes<Result>
> {
    declare id: number;
    declare subjectCode: string;
    declare mark: number;
    declare semester: number;
    declare StudentSymbolNo: number;
}

Result.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subjectCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        mark: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        semester: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        StudentSymbolNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize: sequelize,
        tableName: "results",
        timestamps: false,
    }
);

export default Result;
