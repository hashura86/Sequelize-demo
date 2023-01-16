import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const { DATABASE, USER, PASSWORD, PORT } = process.env

const sequelize = new Sequelize(DATABASE, USER, PASSWORD,{
    dialect: 'mysql',
    host: 'localhost',
    port: PORT
})

export default sequelize


