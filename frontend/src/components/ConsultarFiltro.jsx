import React, { useState } from 'react'

export default function ConsultarFiltro( { onData }) {
    const [filtro, setFiltro] = useState('')
    const [idioma, setIdioma] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if(filtro.length >= 3 ){
            onData(idioma, filtro)
            setMensaje('')
        }else{
            setMensaje('Se tiene que ingresar al menos 3 caracteres')
        };
    }
  return (
    <div className="col-12">
                <div className="card mb-3">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Filtro:</label>
                                <input type="text" placeholder='Descripcion'
                                       className="form-control" onChange={(event) => { setFiltro(event.target.value);}} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Idioma:</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                           id="exampleRadios1" value="" defaultChecked  onChange={(event) => { setIdioma(event.target.value);}}></input>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Todos
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                           id="exampleRadios2" value="en"  onChange={(event) => { setIdioma(event.target.value);}}></input>
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Inglés
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios"
                                           id="exampleRadios3" value="es"  onChange={(event) => { setIdioma(event.target.value);}}></input>
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        Español
                                    </label>
                                </div>

                            </div>
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </form>
                    </div>
                    <h3 style={{color: 'red'}}>{mensaje}</h3>
                </div>
            </div>
  )
}
