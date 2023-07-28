import React, { useRef } from 'react'

const RegistroCensistaEmail = ({obtenerUsuario}) => {

  const campo = useRef(null);
  const tomarDato = () => {
    let usr = campo.current.value;
    obtenerUsuario(usr);
  }



  return (
    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" ref={campo} onChange={tomarDato} />
      <label htmlFor="floatingInput">Email address</label>
    </div>
  )
}

export default RegistroCensistaEmail