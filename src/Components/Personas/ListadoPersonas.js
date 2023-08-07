import React from 'react'
import Personas from './Personas'

const ListadoPersonas = () => {

    return (

        <div className="bd-example"  >
            <table className="table table-hover" style={{
                textAlign: "center",
                maxWidth: "700px",
                margin: "0 auto",
                border: "1px solid #e6e6e6",
                padding: "40px 25px",
                marginTop: "50px"

            }}>
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