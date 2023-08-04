import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);



const CensadosTotales = () => {
    const personas = useSelector(state => state.personas.personas)
    const totales = useSelector(state => state.totalCensados.totalCenso)


    return (
        <div >
            <h1>Total censados / Censados por el usuario</h1>
            <Pie data={{
                labels: ['Censados totales', 'Censados por el usuario'],
                datasets: [
                    {
                        label: 'Nro de personas',
                        data: [totales, personas.length],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'

                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1,
                    },
                ],
            }} />
        </div>
    )
}

export default CensadosTotales