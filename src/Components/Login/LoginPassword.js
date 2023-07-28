import React, { useRef } from 'react'

const LoginPassword = ({ obtenerPassword }) => {

  const campo = useRef(null);
  const tomarDato = () => {
    let pass = campo.current.value;
    obtenerPassword(pass);
  }

  return (
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={campo} onChange={tomarDato} />
      <label htmlFor="floatingPassword">Password</label>
    </div>
  )
}

export default LoginPassword