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
    if (localStorage.length === 2) navigate('/Home');
  }, [])






  const isLoginDisabled = !usuario || !password;

  const handleLogin = () => {
    if (!isLoginDisabled) {

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

  };

  return (
    <div style={{
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto",
      border: "1px solid #e6e6e6",
      padding: "40px 25px",
      marginTop: "50px",
      display: 'grid'

    }}>
      <main className="form-signin w-100 m-auto" >

        <h1 className="h3 mb-3 fw-normal">Iniciar Sesion</h1>
        <LoginEmail obtenerUsuario={obtenerUsuario}></LoginEmail>
        <LoginPassword obtenerPassword={obtenerPassword}></LoginPassword>
        <br />
        <button className="btn btn-primary w-100 py-2" onClick={handleLogin} disabled={isLoginDisabled}>Sign in</button>

        <br />
        <Link to='/RegistroCensista'><button className="btn btn-primary w-100 py-2">Registrar Censista</button></Link>
        {errorLogin && <ModalError />}
      </main>
    </div>
  )
}

export default Login