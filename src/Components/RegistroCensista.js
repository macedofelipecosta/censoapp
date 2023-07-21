import React, { useState } from 'react'



const RegistroCensista = () => {

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
                    alert(`El usuario ${username} ha sido creado con éxito!`);
                    window.location.replace('/Home'); //redireccion a pagina home del censista
                }
            })

            .catch(error => console.log('error', error));

        console.log('Nombre de usuario:', username);
        console.log('Contraseña:', password);


        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="usernameReg">Nombre de usuario:</label>
                <input
                    type="text"
                    id="usernameReg"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="passwordReg">Contraseña:</label>
                <input
                    type="password"
                    id="passwordReg"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    )
}




export default RegistroCensista