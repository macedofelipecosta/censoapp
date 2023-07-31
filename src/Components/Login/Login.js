import React, { useEffect, useState } from 'react'
import LoginEmail from './LoginEmail'
import LoginPassword from './LoginPassword'
import { Link, useNavigate } from 'react-router-dom'
import ModalError from './ModalError'



const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [errorLogin, setErrorLogin] = useState(false)

  const obtenerUsuario = (user) => {
    setUsuario(user);
  }
  const obtenerPassword = (passWord) => {
    setPassword(passWord);
  }

  useEffect(() => {
    verificarSesion();
  },[] )

  const verificarSesion=()=>{
    if (localStorage.length==2) navigate('/Home');
  }
  

  const InicioSesion = (event) => {
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

    fetch("https://censo.develotion.com//login.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        const resp = JSON.parse(result);
        console.log(resp['apiKey']);
        console.log(resp['codigo']);
        console.log(resp['id']);
        if (resp['codigo'] === 200) {
          localStorage.setItem('id', resp['id'])
          localStorage.setItem('apiKey', resp['apiKey'])
          navigate('/Home')
        } else {
          localStorage.clear();
          setErrorLogin(true);
        }

      })
      .catch(error => console.log('error', error));
  }



  return (
    <main className="form-signin w-100 m-auto" >
      <form onSubmit={InicioSesion}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <LoginEmail obtenerUsuario={obtenerUsuario}></LoginEmail>
        <LoginPassword obtenerPassword={obtenerPassword}></LoginPassword>
        <br />
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      </form>
      <br />
      <Link to='/RegistroCensista'><button className="btn btn-primary w-100 py-2">Registrar Censista</button></Link>
      {errorLogin && <ModalError/>}
    </main>
    
  )
}

export default Login