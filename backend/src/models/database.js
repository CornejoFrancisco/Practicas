import Sequelize from "sequelize";
import EventoModel from "./evento.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './eventos.db'
})

sequelize.define(
    'Eventos',
    EventoModel.EventoAttributes,
    EventoModel.EventoOptions
)

try {
    await sequelize.sync()
}
catch (err){
    console.log({msg: err.message})
}

export default sequelize
