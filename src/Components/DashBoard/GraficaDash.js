
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useState } from 'react';

import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Grafica',
        },
    },
};
const GraficaDash = () => {



    const departamentos = useSelector(state => state.departamentos.departamentos)
    const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones)
    const personas = useSelector(state => state.personas.personas)







    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <Bar className="class=d-block w-100" options={options} data={{
                        labels: departamentos.map(dep => [dep['nombre']]),
                        datasets: [
                            {
                                label: 'Personas por departamento',
                                data: departamentos.map(d => {
                                    let personasDep = 0
                                    personas.map(p => {
                                        if (p.departamento === d.id) {
                                            personasDep++
                                        }
                                    })
                                    return personasDep
                                }),
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            },
                        ],
                    }} />
                </div>
                <div className="carousel-item">
                    <Bar className="class=d-block w-100" options={options} data={{
                        labels: ocupaciones.map(ocu => [ocu['ocupacion']]),
                        datasets: [
                            {
                                label: 'Personas por ocupacion',
                                data: ocupaciones.map(o => {
                                    let personasOcup = 0
                                    personas.map(p => {
                                        if (p.ocupacion == o.id) {
                                            personasOcup++
                                        }
                                    })
                                    return personasOcup
                                }),
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            },
                        ],
                    }} />
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default GraficaDash