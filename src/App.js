import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



//
import Login from './Components/Login/Login';
import RegistroCensista from './Components/RegistroCensista/RegistroCensista.js';
import Home from './Components/DashBoard/Home.js';
import RegistroPersona from "./Components/RegistroPersona/RegistroPersona.js";


const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Login} />
      </Routes>
      <Routes>
        <Route exact path="/RegistroCensista" Component={RegistroCensista} />
      </Routes>
      <Routes>
        <Route exact path="/Home" Component={Home} />
      </Routes>
      <Routes>
        <Route exact path="/RegistroPersona" Component={RegistroPersona}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default App