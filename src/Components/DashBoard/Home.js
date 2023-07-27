import React from 'react'
import { Navigate } from "react-router-dom";



const Home = () => {

  const apiKey = localStorage.getItem('apiKey');

  if (!apiKey || apiKey === 'undefined') {

    return (
      <Navigate to='/'></Navigate>

    );
  }

  function CerrarSesion() {
    localStorage.clear();
    window.location.replace('/');
  };

  return (
    <>
      




      <div>Hay apiKey</div>
      <button onClick={CerrarSesion}>Cerrar Sesion</button>
    </>
  );
}




export default Home