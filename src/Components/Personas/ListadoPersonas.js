import React from 'react'
import Personas from './Personas'
import { Link } from 'react-router-dom'






const ListadoPersonas = () => {




    return (

        <div className="bd-example">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Ciudad</th>
                        <th scope='col'>Ocupacion</th>
                    </tr>
                </thead>
                <Personas />
            </table>
        </div>
    )
}

export default ListadoPersonas