import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";


//
import Login from './Components/Login/Login.js';
import RegistroCensista from './Components/RegistroCensista/RegistroCensista.js';
import Home from './Components/DashBoard/Home.js';
import RegistroPersona from "./Components/RegistroPersona/RegistroPersona.js";
import NotFound from './Components/NotFound.js';



const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/RegistroCensista" element={<RegistroCensista />} />

            <Route path="/Home" element={<Home />} />

            <Route path="/RegistroPersona" element={<RegistroPersona />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  )
}

export default App