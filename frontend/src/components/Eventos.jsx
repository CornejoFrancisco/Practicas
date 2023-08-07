import TablaEventos from "./TablaEventos";
import ConsultarFiltro from './ConsultarFiltro';
import React from 'react-hook-form';
import { useEffect, useState} from 'react';
import axios from 'axios'


const Eventos = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const consultarEvento = async() => {

            const resultado = await axios.get('http://localhost:3001/api/eventos')
          setLista(resultado.data)}
          consultarEvento()
        }, [])
    

    const onConsultar = async(idioma, descripcion) => {
        console.log(idioma, descripcion)
        const resultado = await axios.get(`http://localhost:3001/api/eventos?idioma=${idioma}&descripcion=${descripcion}`)
        setLista(resultado.data)
    }

    return (
        <>
            <h3>Formulario de Búsqueda</h3>
            <div className="row">
                <div className="col-12">
                    <ConsultarFiltro onData={onConsultar}></ConsultarFiltro>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <TablaEventos items={lista}/>
                </div>
            </div>
        </>
    );
};

export default Eventos;
