
import Nombre from './Nombre'
import Departamentos from './Departamentos'
import Nacimiento from './Nacimiento'
import Ocupaciones from './Ocupaciones'
import Ciudades from './Ciudades'


import {  useSelector } from 'react-redux'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'





const RegistroPersona = () => {


    const apikey = localStorage.getItem('apiKey');
    const idUser = localStorage.getItem('id');
    

    

    const [nombre, setNombre] = useState("")
    const [nacimiento, setNacimiento] = useState("")
    const ciudad = useSelector(state => state.ciudades.ciudad)
    const departamento = useSelector(state => state.departamentos.departamento)
    const ocupacion = useSelector(state => state.ocupaciones.ocupacion)



    const obtenerNombre = (nombre) => {
        setNombre(nombre);
    }
    const obtenerNacimiento = (nacimiento) => {
        setNacimiento(nacimiento);

    }



    const registrarPersona = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", apikey);
        myHeaders.append("iduser", idUser);

        var raw = JSON.stringify({
            "idUsuario": idUser,
            "nombre": nombre,
            "departamento": departamento[0],
            "ciudad": ciudad[0],
            "fechaNacimiento": nacimiento,
            "ocupacion": ocupacion[0]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://censo.develotion.com//personas.php", requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                alert(result['mensaje'])
                window.location.replace('/Home');
            })
            .catch(error => console.log('error', error));
    }


    return (
        <form onSubmit={registrarPersona}>
            <Link to='/Home'><button className="btn btn-primary w-100 py-2">Cancelar</button></Link>
            <h1 className="h3 mb-3 fw-normal" >Registro de persona</h1>
            <Nombre obtenerNombre={obtenerNombre} />
            <Departamentos />
            <Ciudades />
            <Nacimiento obtenerNacimiento={obtenerNacimiento} />
            <Ocupaciones />

            <button className="btn btn-primary w-100 py-2" type="submit" >Registrar</button>

        </form>
    )
}

export default RegistroPersona