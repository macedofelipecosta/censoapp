import React, { useEffect } from 'react'
import Persona from './Persona'
import { guardarPersonas } from '../Features/personaSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const Personas = () => {

  const personas = useSelector(state => state.personas.personas)

  const dispatch = useDispatch();
  const apikey = localStorage.getItem('apiKey');
  const idUser = localStorage.getItem('id');


  useEffect(() => {
    obtenerPersonas();
  },[])


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

  return (
    <tbody>
      {personas.map(p => <Persona key={'per' + p['id']} {...p} />)}
    </tbody>
  )
}

export default Personas