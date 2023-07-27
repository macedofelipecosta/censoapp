import React from 'react'

const Ciudad = () => {
    return (
        <div className="form-floating">
            <select id="floatingCiudad" className="form-control" required>
                <option value="" selected>Ciudades</option>
                <option>Montevideo</option>
                <option>Atlántida</option>
            </select>
            <label htmlFor="floatingCiudad">Ciudad</label>
        </div>
    )
}
export default Ciudad