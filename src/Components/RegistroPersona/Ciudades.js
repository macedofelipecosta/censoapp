import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guardarCiudades, resetearCiudades, guardarCiudad, guardarTodas } from '../Features/ciudadSlice.js';
import Ciudad from './Ciudad';





const Ciudades = () => {
    const dispatch = useDispatch();
    const apikey = localStorage.getItem('apiKey');
    const idUser = localStorage.getItem('id');

    const ciudadesTodas = useSelector(state => state.ciudades.todas)
    const departamento = useSelector(state => state.departamentos.departamento)

    useEffect(() => {
        dispatch(resetearCiudades());
        obtenerCiudades();
    }, [departamento])



    const obtenerCiudades = () => {
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

        fetch(`https://censo.develotion.com//ciudades.php?idDepartamento=${departamento}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result);
                const city = result['ciudades']
                city.map(c => dispatch(guardarCiudades(c)))
            })
            .catch(error => console.log('error', error));
    }




    const obtenerCiudad = (event) => {
        let ciudadId = event.target.value;
        dispatch(guardarCiudad(ciudadId))
    }


    const ciudadesDep = useSelector(state => state.ciudades.ciudades)

    return (
        <div className="form-floating">
            <select id="floatingCiudad" className="form-control" onChange={obtenerCiudad}>
                <option key={'defaultCiudad'}>Ciudades</option>
                {ciudadesDep.map(c => <Ciudad key={c['id']} {...c}></Ciudad>)}
            </select>
            <label htmlFor="floatingCiudad">Ciudad</label>
        </div>
    )
}

export default Ciudades

/* 
            */