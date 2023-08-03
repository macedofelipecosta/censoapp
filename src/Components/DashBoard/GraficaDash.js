
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
    const ocupaciones = useSelector(state => state.ocupaciones.ocupaciones)
    const personas = useSelector(state => state.personas.personas)
    var perDep = [{
        "id": 3203,
        "nombre": "Flores",
        "latitud": -33.57337530000000214158717426471412181854248046875,
        "longitud": -56.89450279999999793290044181048870086669921875,
        'cantPersonas': 0
    },
    {
        "id": 3204,
        "nombre": "San José",
        "latitud": -34.33831260000000185073076863773167133331298828125,
        "longitud": -56.73984329999999687288436689414083957672119140625,
        'cantPersonas': 0
    },
    {
        "id": 3205,
        "nombre": "Artigas",
        "latitud": -30.617511199999999149667928577400743961334228515625,
        "longitud": -56.95945590000000180452843778766691684722900390625,
        'cantPersonas': 0
    },
    {
        "id": 3206,
        "nombre": "Maldonado",
        "latitud": -34.55979320000000143409124575555324554443359375,
        "longitud": -54.8628551999999984900568961165845394134521484375,
        'cantPersonas': 0
    },
    {
        "id": 3207,
        "nombre": "Rivera",
        "latitud": -31.481742100000001727266862872056663036346435546875,
        "longitud": -55.24357590000000328700480167753994464874267578125,
        'cantPersonas': 0
    },
    {
        "id": 3208,
        "nombre": "Colonia",
        "latitud": -34.1294678000000004658431862480938434600830078125,
        "longitud": -57.6605184000000008381903171539306640625,
        'cantPersonas': 0
    },
    {
        "id": 3209,
        "nombre": "Durazno",
        "latitud": -33.02324540000000041573002818040549755096435546875,
        "longitud": -56.02846439999999716974343755282461643218994140625,
        'cantPersonas': 0
    },
    {
        "id": 3210,
        "nombre": "Río Negro",
        "latitud": -32.76763559999999841920725884847342967987060546875,
        "longitud": -57.4295206999999976460458128713071346282958984375,
        'cantPersonas': 0
    },
    {
        "id": 3211,
        "nombre": "Cerro Largo",
        "latitud": -32.4411032000000005837136995978653430938720703125,
        "longitud": -54.35217529999999896972440183162689208984375,
        'cantPersonas': 0
    },
    {
        "id": 3212,
        "nombre": "Paysandú",
        "latitud": -32.0667365999999987025148584507405757904052734375,
        "longitud": -57.336478900000003022796590812504291534423828125,
        'cantPersonas': 0
    },
    {
        "id": 3213,
        "nombre": "Canelones",
        "tipo": null,
        "latitud": -34.540871699999996735641616396605968475341796875,
        "longitud": -55.93075999999999936562744551338255405426025390625,
        'cantPersonas': 0
    },
    {
        "id": 3214,
        "nombre": "Treinta y Tres",
        "latitud": -33.068508600000001251828507520258426666259765625,
        "longitud": -54.28586270000000268964868155308067798614501953125,
        'cantPersonas': 0
    },
    {
        "id": 3215,
        "nombre": "Lavalleja",
        "latitud": -33.9226175000000012005330063402652740478515625,
        "longitud": -54.97657939999999854308043722994625568389892578125,
        'cantPersonas': 0
    },
    {
        "id": 3216,
        "nombre": "Rocha",
        "latitud": -33.96900810000000348054527421481907367706298828125,
        "longitud": -54.0214849999999984220266924239695072174072265625,
        'cantPersonas': 0
    },
    {
        "id": 3217,
        "nombre": "Florida",
        "latitud": -34.1008393999999981360815581865608692169189453125,
        "longitud": -56.20656960000000168520273291505873203277587890625,
        'cantPersonas': 0

    },
    {
        "id": 3218,
        "nombre": "Montevideo",
        "latitud": -34.818158699999997907070792280137538909912109375,
        "longitud": -56.21382559999999983801899361424148082733154296875,
        'cantPersonas': 0
    },
    {
        "id": 3219,
        "nombre": "Soriano",
        "latitud": -33.5102791999999993777237250469624996185302734375,
        "longitud": -57.74981030000000004065441316924989223480224609375,
        'cantPersonas': 0
    },
    {
        "id": 3220,
        "nombre": "Salto",
        "latitud": -31.38802799999999848523657419718801975250244140625,
        "longitud": -57.96124549999999686633600504137575626373291015625,
        'cantPersonas': 0

    },
    {
        "id": 3221,
        "nombre": "Tacuarembó",
        "latitud": -31.720683699999998594876160495914518833160400390625,
        "longitud": -55.98598870000000005120455170981585979461669921875,
        'cantPersonas': 0

    }]
    var ocuPers = [
        {
            "id": 1,
            "ocupacion": "Empleado dependiente",
            'cantPersonas': 0
        },
        {
            "id": 2,
            "ocupacion": "Empleado independiente",
            'cantPersonas': 0
        },
        {
            "id": 3,
            "ocupacion": "Empleado público",
            'cantPersonas': 0
        },
        {
            "id": 4,
            "ocupacion": "Comerciante",
            'cantPersonas': 0
        },
        {
            "id": 5,
            "ocupacion": "Estudiante",
            'cantPersonas': 0
        },
        {
            "id": 7,
            "ocupacion": "Emprendedor",
            'cantPersonas': 0
        },
        {
            "id": 8,
            "ocupacion": "No trabaja",
            'cantPersonas': 0
        }
    ]


    return (
        <div>
            <Bar options={options} data={{
                labels: departamentos.map(dep => [dep['nombre']]),
                datasets: [
                    {
                        label: 'Personas por departamento',
                        data: perDep.map(pd => {
                            personas.map(p => {
                                if (p.departamento === pd.id) {
                                    pd.cantPersonas++
                                }
                            })
                            return pd.cantPersonas
                        }),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }} />
            <Bar options={options} data={{
                labels: ocupaciones.map(ocu => [ocu['ocupacion']]),
                datasets: [
                    {
                        label: 'Personas por ocupacion',
                        data: ocuPers.map(op => {
                            personas.map(p => {
                                if (p.ocupacion == op.id) {
                                    op.cantPersonas++
                                }
                            })
                            return op.cantPersonas
                        }),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }} />
        </div>
    )
}

export default GraficaDash