import React, { useRef } from 'react'

const LoginEmail = ({ obtenerUsuario }) => {

  const campo = useRef(null);
  const tomarDato = () => {
    let usr = campo.current.value;
    obtenerUsuario(usr);
  }

  return (
    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" ref={campo} placeholder="name@example.com" onChange={tomarDato} />
      <label htmlFor="floatingInput">Usuario</label>
    </div>
  )
}

export default LoginEmail