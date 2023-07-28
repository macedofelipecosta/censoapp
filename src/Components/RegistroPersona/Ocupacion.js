import React, { useRef } from 'react'

const Ocupacion = ({obtenerOcupacion, ocupaciones  }) => {


    const campo = useRef(null);
    const tomarDato = () => {
      let dep = campo.current.value;
      obtenerOcupacion(dep);
    }

    return (
        <div className="form-floating">
            <select id="floatingOcupacion" className="form-control" required ref={campo} onChange={tomarDato}>
                <option defaultValue={'noNe'}>Ocupaciones</option>
                {ocupaciones.map(o=><option key={o.id} id={o.id} value={o.id}>{o.ocupacion}</option>)}
            </select>
            <label htmlFor="floatingOcupacion">Ocupación</label>
        </div>
    )
}

export default Ocupacion