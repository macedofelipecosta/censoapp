import React, { useState } from 'react'
import Nombre from './Nombre'
import Departamento from './Departamento'
import Ciudad from './Ciudad'
import Nacimiento from './Nacimiento'
import Ocupacion from './Ocupacion'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import guardarDepartamentos from '../Features/departamentoSlice.js'
import { guardarOcupaciones } from '../Features/ocupacionesSlice'


const RegistroPersona = () => {
    
    const dispatch = useDispatch();
    const apikey = localStorage.getItem('apiKey');
    const idUser = localStorage.getItem('id');

    // const getDepartamentos = useSelector(state => state.departamento.);

    const [nombre, setNombre] = useState("")
    const [departamento, setDepartamento] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [nacimiento, setNacimiento] = useState("")
    const [ocupacion, setOcupacion] = useState("")

    const departamentos=useSelector(state=>state.departamentos.departamentos)
    // const [departamentos, setDepartamentos] = useState([])
    const [ciudades, setCiudades] = useState([])
    // const [ocupaciones, setOcupaciones] = useState([])
    const ocupaciones=useSelector(state=>state.ocupaciones.ocupaciones)

    useEffect(() => {
        obtenerDepartamentos();
        obtenerOcupaciones();
    }, [])

    const obtenerDepartamentos = () => {
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

        fetch("https://censo.develotion.com//departamentos.php", requestOptions)
            .then(response => response.text())
            .then(result => {

                const dep = JSON.parse(result)
                dispatch(guardarDepartamentos(dep['departamentos']))
                // setDepartamentos(dep['departamentos'])
                console.log(dep['departamentos'])
                // console.log(result)
            })
            .catch(error => console.log('error', error));
    }
    const obtenerCiudades = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", apikey);
        myHeaders.append("iduser", idUser);

        var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(`https://censo.develotion.com//ciudades.php?idDepartamento=${3208}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const city = JSON.parse(result)
                setCiudades(city['ciudades'])
                console.log(city['ciudades'])
            })
            .catch(error => console.log('error', error));
    }
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
                let ocu = JSON.parse(result);
                dispatch(guardarOcupaciones(ocu['ocupaciones']))
                // setOcupaciones(ocu['ocupaciones']);
                console.log(ocu['ocupaciones'])
                // console.log(result)
            })
            .catch(error => console.log('error', error));
    }





    const obtenerNombre = (nombre) => {
        setNombre(nombre);
    }
    const obtenerDepartamento = (departamento) => {
        setDepartamento(departamento);
    }
    const obtenerCiudad = (ciudad) => {
        setCiudad(ciudad);
    }
    const obtenerNacimiento = (nacimiento) => {
        setNacimiento(nacimiento);
    }
    const obtenerOcupacion = (ocupacion) => {
        setOcupacion(ocupacion);
    }



    return (
        <form>

            <h1 className="h3 mb-3 fw-normal" >Registro de persona</h1>
            <Nombre obtenerNombre={obtenerNombre} />
            <Departamento obtenerDepartamento={obtenerDepartamento} departamentos={departamentos} onChange={obtenerCiudades} />
            <Ciudad obtenerCiudad={obtenerCiudad} ciudades={ciudades}/>
            <Nacimiento obtenerNacimiento={obtenerNacimiento} />
            <Ocupacion obtenerOcupacion={obtenerOcupacion} ocupaciones={ocupaciones} />

            <button className="btn btn-primary w-100 py-2" type="submit">Registrar</button>

        </form>
    )
}

export default RegistroPersona