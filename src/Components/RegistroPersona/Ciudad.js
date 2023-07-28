import React, { useRef } from 'react'

const Ciudad = ({obtenerCiudad}) => {

    const campo = useRef(null);
    const tomarDato = () => {
      let dep = campo.current.value;
      obtenerCiudad(dep);
    }

    return (
        <div className="form-floating">
            <select id="floatingCiudad" className="form-control" required ref={campo} onChange={tomarDato}>
                <option value="" defaultValue={'Ciudades'}>Ciudades</option>
                <option>Montevideo</option>
                <option>Atlántida</option>
            </select>
            <label htmlFor="floatingCiudad">Ciudad</label>
        </div>
    )
}
export default Ciudad