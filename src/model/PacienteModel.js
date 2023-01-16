import { Sequelize } from "sequelize"
import database from "../db.js"

const Paciente = database.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: Sequelize.INTEGER,
    faltas: Sequelize.INTEGER,
    descricao: Sequelize.STRING
           
})

export default Paciente