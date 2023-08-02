import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { eliminarPersona } from '../Features/personaSlice.js'

const Persona = ({ id, nombre, departamento, ciudad, ocupacion }) => {

  const dispatch = useDispatch();
  const apikey = localStorage.getItem('apiKey');
  const idUser = localStorage.getItem('id');

  const departamentos = useSelector(state => state.departamentos.departamentos)
 

  const eliminar = (event) => {
    const user = event.target.value;

    console.log(event.target.value)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("apikey", apikey);
    myHeaders.append("iduser", idUser);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://censo.develotion.com//personas.php?idCenso=${user}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result)
        if (result['codigo'] == 200) {
          dispatch(eliminarPersona(user))
        }
        console.log(result)
      })
      .catch(error => console.log('error', error));

  }

  return (
    <tr>
      <th scope="row">{nombre}</th>
      <td id={departamento}>{departamento}</td>
      <td id={ciudad}>{ciudad}</td>
      <td id={ocupacion}>{ocupacion}</td>
      <td><button id={id} value={id} onClick={eliminar}>Eliminar persona</button></td>
    </tr>
  )
}

export default Persona