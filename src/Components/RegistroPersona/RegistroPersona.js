
import Nombre from './Nombre'
import Departamentos from './Departamentos'
import Nacimiento from './Nacimiento'
import Ocupaciones from './Ocupaciones'
import Ciudades from './Ciudades'
import { guardarPersonas } from '../Features/personaSlice.js'

import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'






const RegistroPersona = () => {

    const dispatch = useDispatch();
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
        var usuario=({
            "id": idUser,
            "nombre": nombre,
            "departamento": departamento[0],
            "ciudad": ciudad[0],
            "fechaNacimiento": nacimiento,
            "ocupacion": ocupacion[0],
            "idUsuario": idUser
        })

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
                dispatch(guardarPersonas(usuario))
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }


    return (
        <div style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
            border: "1px solid #e6e6e6",
            padding: "40px 25px",
            marginTop: "50px"

        }}>
            <form onSubmit={registrarPersona}>
                <h1 className="h3 mb-3 fw-normal" >Registro de persona</h1>
                <Nombre obtenerNombre={obtenerNombre} />
                <Departamentos />
                <Ciudades />
                <Nacimiento obtenerNacimiento={obtenerNacimiento} />
                <Ocupaciones />

                <button className="btn btn-primary w-100 py-2" type="submit" >Registrar</button>

            </form>
        </div>
    )
}

export default RegistroPersona