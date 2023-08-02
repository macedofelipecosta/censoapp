import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
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
    const ocupaciones=useSelector(state=>state.ocupaciones.ocupaciones)
    const personas = useSelector(state => state.personas.personas)

    return (
        <div>
        <Bar options={options} data={{
            labels: departamentos.map(dep => [dep['nombre']]),
            datasets: [
                {
                    label: 'Personas por departamento',
                    data: personas.map(p=>1),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        }} />
        <Bar options={options} data={{
            labels: ocupaciones.map(ocu => [ocu['ocupacion']]),
            datasets: [
                {
                    label: 'Personas por ocupacion',
                    data: personas.map(p=>1),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        }} />
        </div>
    )
}

export default GraficaDash