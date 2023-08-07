import { DataTypes } from "sequelize";

const EventoAttributes = {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    Fecha: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { 
            notEmpty: {
                args: true,
                msg: "El nombre del Evento es necesario"
            }
        }
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La descripción del Evento es necesario"
            }
        }
    },
    Idioma: {
        type: DataTypes.STRING(3),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El idioma del Evento es necesario"
            }
        }
    },
    Mes: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La mes del Evento es necesaria"
            }
        }
    },
    Eliminado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El estado eliminado es requerido.'
            }
        }
    },

}

const EventoOptions = {
    timestamps: false
}

const EventoModel = {
    EventoAttributes,
    EventoOptions
}

export default EventoModel
