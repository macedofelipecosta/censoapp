import React from 'react'
import Nombre from './Nombre'
import Departamento from './Departamento'
import Ciudad from './Ciudad'
import Nacimiento from './Nacimiento'
import Ocupacion from './Ocupacion'

const RegistroPersona = () => {
    return (
        <form>

            <h1 class="h3 mb-3 fw-normal">Registro de persona</h1>
            <Nombre />
            <Departamento />
            <Ciudad />
            <Nacimiento />
            <Ocupacion />
            <button class="btn btn-primary w-100 py-2" type="submit">Registrar</button>

        </form>
    )
}

export default RegistroPersona