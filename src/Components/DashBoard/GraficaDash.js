import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const GraficaDash = () => {

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

    const departamentos = useSelector(state => state.departamentos.departamentos)
    
    return (
        <Bar options={options} data={{
            labels:['Montevideo', 'Canelones', 'Maldonado'],
            datasets: [
                {
                    label: 'Estadisticas',
                    data: labels.map(),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        }} />
    )
}

export default GraficaDash