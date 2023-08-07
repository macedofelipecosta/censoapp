import React from 'react'

const Menu = () => {

    
    function CerrarSesion() {
        localStorage.clear();
        window.location.replace('/');
      };


    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: '280px' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4">Menu</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        Censar persona
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        Grafica lineal
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        Lista de censados
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        Grafica circular
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link link-body-emphasis">
                        Mapa de censados
                    </a>
                </li>
                <li>
                    <Link to='/' onClick={CerrarSesion}><button className="btn btn-danger w-100 py-2">Cerrar Sesion</button></Link>
                </li>
            </ul>
            <hr />

        </div>

    )
}

export default Menu