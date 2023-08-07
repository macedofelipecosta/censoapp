import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { guardarDepartamentos } from '../Features/departamentoSlice'
import { guardarTodas } from '../Features/ciudadSlice.js'
import { guardarOcupaciones } from '../Features/ocupacionesSlice.js'
import { guardarPersonas } from '../Features/personaSlice';
import { setCensados } from '../Features/censadoSlice.js'

import GraficaDash from './GraficaDash.js';
import Mapa from './Mapa';
import CensadosTotales from './CensadosTotales';
import ListadoPersonas from '../Personas/ListadoPersonas.js'
import RegistroPersona from '../RegistroPersona/RegistroPersona.js'
import CensoMvdInt from './CensoMvdInt';
import Contador from './Contador';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apikey = localStorage.getItem('apiKey');
  const idUser = localStorage.getItem('id');



  useEffect(() => {
    if (!apikey || apikey === 'undefined') navigate('/');
    obtenerDepartamentos();
    obtenerCiudadesTodas();
    obtenerOcupaciones();
    obtenerPersonas();
    totalCensados();
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
        result = JSON.parse(result)
        const dep = result['departamentos']
        dep.map(d => dispatch(guardarDepartamentos(d)))
        // dispatch(guardarDepartamentos(dep))
        // setDepartamentos(dep['departamentos'])
        // console.log(dep)
        // console.log(dep[0]['id'])
        // console.log(result)
      })
      .catch(error => console.log('error', error));
  }

  const obtenerCiudadesTodas = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", apikey);
    myHeaders.append("iduser", idUser);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://censo.develotion.com//ciudades.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result)
        const city = result['ciudades']
        city.map(c => dispatch(guardarTodas(c)))
      })
      .catch(error => console.log('error', error));
  }

  const obtenerOcupaciones = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", apikey);
    myHeaders.append("iduser", idUser);



    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://censo.develotion.com//ocupaciones.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result);
        const ocu = result['ocupaciones']
        ocu.map(o => dispatch(guardarOcupaciones(o)))
      })
      .catch(error => console.log('error', error));
  }

  const obtenerPersonas = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", apikey);
    myHeaders.append("iduser", idUser);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://censo.develotion.com//personas.php?idUsuario=${idUser}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result);
        const personas = result['personas']
        personas.map(p => dispatch(guardarPersonas(p)))

        console.log(personas)
      })
      .catch(error => console.log('error', error));
  }

  const totalCensados = () => {
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

    fetch("https://censo.develotion.com//totalCensados.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result)
        dispatch(setCensados(result['total']))
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }


  const limite = new Date('2023-08-31T23:59:59').getTime();


  function CerrarSesion() {
    localStorage.clear();
    window.location.replace('/');
  };

  return (
    <div>



      <div style={{
        textAlign: "center",
        maxWidth: "700px",
        margin: "0 auto",
        border: "1px solid #e6e6e6",
        padding: "revert-layer",
        marginTop: "50px"

      }}>
        <Contador fechaLimite={limite} />
        <br />
        <RegistroPersona />
        <br />
        <CensoMvdInt />
        <br />
        <div style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "revert-layer",
          marginTop: "50px",
          display: 'grid'

        }}>
          <GraficaDash></GraficaDash>
          <ListadoPersonas />
        </div>
        <div style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "40px 25px",
          marginTop: "50px",
          display: 'grid'

        }}>
          <CensadosTotales></CensadosTotales>
        </div>
        <div style={{
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "40px 25px",
          marginTop: "50px"

        }}>
          <Mapa />
        </div>


      </div>
      <Link to='/' onClick={CerrarSesion}><button className="btn btn-danger w-100 py-2">Cerrar Sesion</button></Link>
    </div>
  );
}




export default Home