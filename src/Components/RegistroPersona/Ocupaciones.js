import React, { useEffect } from 'react'
import Ocupacion from './Ocupacion'
import { useDispatch, useSelector } from 'react-redux';
import {  resetearOcupacion, guardarOcupacion } from '../Features/ocupacionesSlice'

const Ocupaciones = () => {

    const dispatch = useDispatch();



    const obtenerOcupacion = (event) => {
        dispatch(resetearOcupacion());
        let ocupacionId = event.target.value;
        dispatch(guardarOcupacion(ocupacionId))
    }

    const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones)
    return (
        <div className="form-floating">
            <select id="floatingOcupacion" className="form-control" onChange={obtenerOcupacion} required >
                <option key={'defaultOcup'}>Ocupaciones</option>
                {ocupaciones.map(o => <Ocupacion key={o['id']} {...o} ></Ocupacion>)}
            </select>
            <label htmlFor="floatingOcupacion">Ocupación</label>
        </div>
    )
}

export default Ocupaciones