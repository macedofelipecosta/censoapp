import React from 'react'

const Ocupacion = () => {
    return (
        <div className="form-floating">
            <select id="floatingOcupacion" className="form-control" required>
                <option selected>Ocupaciones</option>
                <option>Abogado</option>
                <option>Chorizero</option>
            </select>
            <label htmlFor="floatingOcupacion">Ocupación</label>
        </div>
    )
}

export default Ocupacion