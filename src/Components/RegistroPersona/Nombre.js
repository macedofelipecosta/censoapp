import React, { useRef } from 'react'

const Nombre = ({obtenerNombre}) => {

  const campo = useRef(null);
  const tomarDato = () => {
    let nombre = campo.current.value;
    obtenerNombre(nombre);
  }


  return (
    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" placeholder="Alberto Casas" required ref={campo} onChange={tomarDato}/>
      <label htmlFor="floatingInput">Nombre</label>
    </div>
  )
}

export default Nombre