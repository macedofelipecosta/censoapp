import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';


const RegistroPersonas = () => {
    const apiKey = localStorage.getItem('apiKey');
    const idUser = localStorage.getItem('id');

    //datos para llenar pagina
    const [departamentos, setDepartamentos] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [ocupaciones, setOcupaciones] = useState([]);

    //datos para mandar en solicitud
    const [namePersona, setNamePersona] = useState("");
    const [departamentoPersona, setDepartamentoPersona] = useState("");
    const [ciudadPersona, setCiudadPersona] = useState("");
    const [nacimientoPersona, setnacimientoPersona] = useState("");
    const [ocupacionPersona, setOcupacionPersona] = useState("");

    const name = (event) => {
        setNamePersona(event.value);
    }
    const departamento = (event) => {
        setDepartamentoPersona(event);
    }
    const ciudad = (event) => {
        setCiudadPersona(event)
    }
    const nacimiento = (event) => {
        setnacimientoPersona(event)
    }
    const ocupacion = (event) => {
        setOcupacionPersona(event)
    }
    //departamentos

    const getDepartamentos = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", {apiKey});
        myHeaders.append("iduser", {idUser});

        var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://censo.develotion.com//departamentos.php", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const getCiudades = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", apiKey);
        myHeaders.append("iduser", idUser);

        var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(`https://censo.develotion.com/|/ciudades.php?idDepartamento=${event.id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                setCiudades(result['ciudades']);
                console.log(result);
            })
            .catch(error => console.log('error', error));
    }
    const getOcupaciones = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", apiKey);
        myHeaders.append("iduser", idUser);

        var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://censo.develotion.com/|/ocupaciones.php", requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                setOcupaciones(result['ocupaciones']);
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getDepartamentos();
        getOcupaciones();
    })


    const registroPersona = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", { apiKey });
        myHeaders.append("id", { idUser });

        var raw = JSON.stringify({
            "idUsuario": idUser,
            "nombre": namePersona,
            "departamento": departamentoPersona,
            "ciudad": ciudadPersona,
            "fechaNacimiento": nacimientoPersona,
            "ocupacion": ocupacionPersona
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://censo.develotion.com/|/personas.php", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    return (
        <>
            {/* <form onSubmit={registroPersona} onLoad={getDepartamentos}>
                <label htmlFor='namePersona'>Nombre</label>
                <input type='text' placeholder='Ingrese nombre' onChange={name} required />

                <label htmlFor='departamentoPersona'>Departamento</label>
                <select id='departamentoPersona' onChange={departamento}>
                    {departamentos.map(dep => <option key={dep.id} value={dep.id} onSelect={getCiudades} >{dep.nombre}</option>)}
                </select>

                <label htmlFor='ciudadPersona'>Ciudad</label>
                <select id='ciudadPersona' onChange={ciudad}>
                    {ciudades.map(ciudad => <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>)}
                </select>

                <label htmlFor='nacimientoPersona'>Nacimiento</label>
                <input id='nacimientoPersona' type='date' onChange={nacimiento} required />

                <label htmlFor='ocupacionPersona'>Ocupacion</label>
                <select id='ocupacionPersona' onChange={ocupacion}>
                    {ocupaciones.map(o => <option key={o.id} value={o.id}>{o.nombre}</option>)}
                </select>
                <button type='submit'>Censar Persona</button>
            </form> */}
        </>
    )
}

export default RegistroPersonas