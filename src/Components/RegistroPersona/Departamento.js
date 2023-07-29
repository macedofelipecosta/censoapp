import React, { useRef } from 'react'

const Departamento = ({id, nombre, obtenerDepartamentoHijo}) => {


    const campo = useRef(null);
    const tomarDato = () => {
        let dep = campo.current.value;
        obtenerDepartamentoHijo(dep);
    }
    
    return (
                <option id={id} value={id} ref={campo} onChange={tomarDato}>{nombre}</option>    
    )
}

export default Departamento