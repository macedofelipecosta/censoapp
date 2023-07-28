import React, { useState } from 'react'
import RegistroCensistaEmail from './RegistroCensistaEmail'
import RegistroCensistaPassword from './RegistroCensistaPassword'

const Login = () => {

  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")

  const obtenerUsuario = (user) => {
    setUsuario(user);
  }
  const obtenerPassword = (passWord) => {
    setPassword(passWord);
  }

  const registrarCensista = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "usuario": usuario,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://censo.develotion.com//usuarios.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        const resp = JSON.parse(result);
        if (resp.codigo >= 400 && resp.codigo <= 499) {
          console.log(resp['mensaje'], 'Cod. Error:', resp.codigo);
          alert(resp['mensaje']);
        } else if (resp.codigo >= 200 && resp.codigo <= 299) {
          localStorage.setItem('id', resp['id'])
          localStorage.setItem('apiKey', resp['apiKey']);
          alert(`El usuario ${usuario} ha sido creado con éxito!`);
          window.location.replace('/Home'); //redireccion a pagina home del censista
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={registrarCensista}>
        <h1 className="h3 mb-3 fw-normal">Registro de censista</h1>
        <RegistroCensistaEmail obtenerUsuario={obtenerUsuario} />
        <RegistroCensistaPassword obtenerPassword={obtenerPassword} />
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      </form>
    </main>
  )
}

export default Login