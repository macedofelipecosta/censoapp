import React, { useEffect } from 'react'
import Ocupacion from './Ocupacion'
import { useDispatch, useSelector } from 'react-redux';
import { guardarOcupaciones, resetearOcupacion, guardarOcupacion } from '../Features/ocupacionesSlice'

const Ocupaciones = () => {

    const dispatch = useDispatch();
    const apikey = localStorage.getItem('apiKey');
    const idUser = localStorage.getItem('id');

    useEffect(() => {
        obtenerOcupaciones();
    }, [])


    const obtenerOcupaciones = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", apikey);
        myHeaders.append("iduser", idUser);

        // var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://censo.develotion.com//ocupaciones.php", requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result);
                const ocu = result['ocupaciones']
                ocu.map(o => dispatch(guardarOcupaciones(o)))
                // dispatch(guardarOcupaciones(ocu))
                // setOcupaciones(ocu['ocupaciones']);
                // console.log(ocu)
                // ocu.map(o=>console.log(o))
                // console.log(result)
            })
            .catch(error => console.log('error', error));
    }

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