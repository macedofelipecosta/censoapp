import React, { useState } from 'react'
import Personas from './Personas'
import FiltroOcupacion from './FiltroOcupacion'

const ListadoPersonas = () => {
    const [ocupacion, setOcupacion] = useState('')

    const ocupacionFltr = (ocup) => {
        setOcupacion(ocup);
    }

    const filtrado = () => {

    }

    return (

        <div className="bd-example"  >
            <FiltroOcupacion ocupacionFltr={ocupacionFltr}></FiltroOcupacion>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Ciudad</th>
                        <th scope='col'>Ocupacion</th>
                    </tr>
                </thead>
                <Personas idOcupacion={ocupacion} />
            </table>
        </div>
    )
}

export default ListadoPersonas