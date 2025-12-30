import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("rps", "root", "root", {
    host: "localhost",
    dialect: "mysql",
});

export async function connectDB() {
    try {
        await sequelize.sync();
    } catch (err) {
        console.log(err);
    }
}
