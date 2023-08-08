import React from 'react'
import Ocupacion from './Ocupacion'
import { useDispatch, useSelector } from 'react-redux';
import { resetearOcupacion, guardarOcupacion } from '../Features/ocupacionesSlice'


const Ocupaciones = ({ getEdad }) => {
    const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones)
    const dispatch = useDispatch();

    const obtenerOcupacion = (event) => {
        dispatch(resetearOcupacion());
        let ocupacionId = event.target.value;
        dispatch(guardarOcupacion(ocupacionId))
    }

    var edad = getEdad();


    return (
        <div className="form-floating">
            <select id="floatingOcupacion" className="form-control" onChange={obtenerOcupacion} required >
                <option key={'defaultOcup'}>Ocupaciones</option>
                {
                    edad >= 18 ? ocupaciones.map(o => <Ocupacion key={o['id']} {...o}></Ocupacion>) : <Ocupacion key={ocupaciones[4]}{...ocupaciones[4]}></Ocupacion>
                }

            </select>
            <label htmlFor="floatingOcupacion">Ocupación</label>
        </div>
    )
}

export default Ocupaciones