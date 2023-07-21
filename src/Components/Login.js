import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "usuario": username,
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
                const resp=JSON.parse(result);
                console.log(resp['apiKey']);
                console.log(resp['cofigo']);
                console.log(resp['id']);
                localStorage.setItem('id', resp['id'])
                localStorage.setItem('apiKey', resp['apiKey'])
                window.location.replace('/Home');
                })
            
            .catch(error => console.log('error', error));



        console.log('Nombre de usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="submit">Iniciar sesión</button>
            <button>
            <Link to="/RegistroCensista">Registrarse como censista</Link>
            </button>
        </form>
    );


};


export default Login;