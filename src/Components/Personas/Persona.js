import { useDispatch, useSelector } from 'react-redux'
import { eliminarPersona } from '../Features/personaSlice.js'

const Persona = ({ id, nombre, departamento, ciudad, ocupacion }) => {

  const dispatch = useDispatch();
  const apikey = localStorage.getItem('apiKey');
  const idUser = localStorage.getItem('id');

  const departamentos = useSelector(state => state.departamentos.departamentos)
  const ciudadesTodas = useSelector(state => state.ciudades.todas)
  const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones)

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
      <td id={departamento}>{departamentos.map(d => { if (d.id === departamento) { return d.nombre } })}</td>
      <td id={ciudad}>{ciudadesTodas.map(c => { if (c.id === ciudad) { return c.nombre } })}</td>
      <td id={ocupacion}>{ocupaciones.map(o=>{if(o.id===ocupacion){return o.ocupacion}})}</td>
      <td><button id={id} value={id} onClick={eliminar}>Eliminar persona</button></td>
    </tr>
  )
}

export default Persona