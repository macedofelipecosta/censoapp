import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const apiKey = localStorage.getItem('apiKey');

  useEffect(() => {
    if (!apiKey || apiKey === 'undefined') navigate('/');
  }, [])

  function CerrarSesion() {
    localStorage.clear();
    window.location.replace('/');
  };

  return (
    <>





      <div>Hay apiKey</div>
      <Link to='/' onClick={CerrarSesion}><button>Cerrar Sesion</button></Link>
    </>
  );
}




export default Home