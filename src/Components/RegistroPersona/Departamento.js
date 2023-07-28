import React, { useRef } from 'react'

const Departamento = ({obtenerDepartamento, departamentos}) => {

    const campo = useRef(null);
    const tomarDato = () => {
      let dep = campo.current.value;
      obtenerDepartamento(dep);
    }
    return (
        <div className="form-floating">
            <select id="floatingDepartamento" className="form-control" required onChange={tomarDato} ref={campo}>
                <option value="" defaultValue={'Departamentos'}> Departamentos</option>
                {departamentos.map(dep=><option key={dep.id} id={dep.id} value={dep.id}>{dep.nombre}</option>)}
            </select>
            <label htmlFor="floatingDepartamento">Departamento</label>
        </div>
    )
}

export default Departamento