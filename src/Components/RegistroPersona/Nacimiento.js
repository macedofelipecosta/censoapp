import React, { useRef } from 'react'

const Nacimiento = ({obtenerNacimiento}) => {

    const campo = useRef(null);
    const tomarDato = () => {
      let dep = campo.current.value;
      obtenerNacimiento(dep);
    }

    return (
        <div className="form-floating">
            <input type="date" className="form-control" id="floatinNacimiento" required ref={campo} onChange={tomarDato}/>
            <label htmlFor="floatinNacimiento">Nacimiento</label>
        </div>
    )
}

export default Nacimiento