import React from 'react'

const Nacimiento = () => {
    return (
        <div className="form-floating">
            <input type="date" className="form-control" id="floatinNacimiento" required />
            <label htmlFor="floatinNacimiento">Nacimiento</label>
        </div>
    )
}

export default Nacimiento