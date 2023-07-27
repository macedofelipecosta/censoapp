import React from 'react'

const Nombre = () => {
  return (
    <div className="form-floating">
      <input type="text" className="form-control" id="floatingInput" placeholder="Alberto Casas" required />
      <label htmlFor="floatingInput">Nombre</label>
    </div>
  )
}

export default Nombre