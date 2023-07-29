import React, { useRef } from 'react'

const Ocupacion = ({id, ocupacion, obtenerOcupacion}) => {


    const campo = useRef(null);
    const tomarDato = () => {
      let dep = campo.current.value;
      obtenerOcupacion(dep);
    }

    return (
        <option id={id} value={id} ref={campo} onChange={tomarDato} >{ocupacion}</option>
    )
}

export default Ocupacion