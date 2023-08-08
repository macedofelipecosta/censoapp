import React, { useRef } from 'react'
import Ocupacion from '../RegistroPersona/Ocupacion.js'
import { useDispatch, useSelector } from 'react-redux';



const FiltroOcupacion = ({ocupacionFltr}) => {
    const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones)
    

    const campo = useRef(null);
    const tomarDato = () => {
      let ocupa = campo.current.value;
      ocupacionFltr(ocupa);
    }



  return (
    <div className="form-floating">
        <h1>Listado de censados</h1>
            <select id="floatingOcupacion" className="form-control" onChange={tomarDato} ref={campo} required >
                <option key={'defaultOcup'}>Ocupaciones</option>
                {
                  ocupaciones.map(o => <Ocupacion key={o['id'] } {...o}></Ocupacion>) 
                }

            </select>
            <label htmlFor="floatingOcupacion">Ocupación</label>
        </div>
  )
}

export default FiltroOcupacion