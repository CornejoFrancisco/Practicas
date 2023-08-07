import express from 'express'
import sequelize from '../models/database.js'
const routerEventos = express.Router()
import { Op } from 'sequelize';


routerEventos.get('/api/eventos', async(req, res) => {
    const {idioma, descripcion} = req.query
    if((!idioma || idioma === '')  && !descripcion){
    const resultados = await sequelize.models.Eventos.findAll({
        attributes: [
            'Id',
            'Fecha',
            'Descripcion',
            'Idioma',
            'Mes',
            'Eliminado'
        ]
    });

    const resultadosMin = resultados.map(result => {
        const resultObj = result.toJSON();
        const newObj = {};
        for (const key in resultObj) {
            newObj[key.toLowerCase()] = resultObj[key];
        }
        return newObj;
    });

    res.json(resultadosMin);
    }
    if(idioma && !descripcion){
        const resultados = await sequelize.models.Eventos.findAll({
        where : {
            Idioma : { [Op.like] : `${idioma}`}
        },
        attributes: [
            'Id',
            'Fecha',
            'Descripcion',
            'Idioma',
            'Mes',
            'Eliminado'
        ]
    });

    const resultadosMin = resultados.map(result => {
        const resultObj = result.toJSON();
        const newObj = {};
        for (const key in resultObj) {
            newObj[key.toLowerCase()] = resultObj[key];
        }
        return newObj;
    });

    res.json(resultadosMin);
    }
    if(idioma && descripcion){
        const resultados = await sequelize.models.Eventos.findAll({
            where: {
                [Op.and]: [
                    { idioma: { [Op.like]: `${idioma}` } },
                    { descripcion: { [Op.like]: `%${descripcion}%` } }
                ]
                },
            attributes: [
                'Id',
                'Fecha',
                'Descripcion',
                'Idioma',
                'Mes',
                'Eliminado'
            ]
        });

        const resultadosMin = resultados.map(result => {
            const resultObj = result.toJSON();
            const newObj = {};
            for (const key in resultObj) {
                newObj[key.toLowerCase()] = resultObj[key];
            }
            return newObj;
        });
    
        res.json(resultadosMin);
    }
    if(!idioma && descripcion){
        const resultados = await sequelize.models.Eventos.findAll({
            where: {
                [Op.and]: [
                    { descripcion: { [Op.like]: `%${descripcion}%` } }
                ]
                },
            attributes: [
                'Id',
                'Fecha',
                'Descripcion',
                'Idioma',
                'Mes',
                'Eliminado'
            ]
        });

        const resultadosMin = resultados.map(result => {
            const resultObj = result.toJSON();
            const newObj = {};
            for (const key in resultObj) {
                newObj[key.toLowerCase()] = resultObj[key];
            }
            return newObj;
        });
    
        res.json(resultadosMin);
    }
});

export default routerEventos;
