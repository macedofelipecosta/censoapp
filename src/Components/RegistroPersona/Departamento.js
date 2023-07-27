import React from 'react'

const Departamento = () => {
    return (
        <div className="form-floating">
            <select id="floatingDepartamento" className="form-control" required>
                <option value="" selected> Departamentos</option>
                <option>Montevideo</option>
                <option>Canelones</option>
            </select>
            <label htmlFor="floatingDepartamento">Departamento</label>
        </div>
    )
}

export default Departamento