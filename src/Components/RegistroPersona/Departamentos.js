import React, { useEffect, useState } from 'react'
import Departamento from './Departamento';
import { useDispatch, useSelector } from 'react-redux';
import {guardarDepartamentos, guardarDepartamento} from '../Features/departamentoSlice'

const Departamentos = ({}) => {
    const dispatch = useDispatch();
    const apikey = localStorage.getItem('apiKey');
    const idUser = localStorage.getItem('id');

    


    useEffect(() => {
        obtenerDepartamentos();
    }, [])


    const obtenerDepartamentos = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("apikey", apikey);
        myHeaders.append("iduser", idUser);

        // var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://censo.develotion.com//departamentos.php", requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result)
                const dep = result['departamentos']
                dep.map(d=>dispatch(guardarDepartamentos(d)))
                // dispatch(guardarDepartamentos(dep))
                // setDepartamentos(dep['departamentos'])
                // console.log(dep)
                // console.log(dep[0]['id'])
                // console.log(result)
            })
            .catch(error => console.log('error', error));
    }
    
    const obtenerDepartamento=(event)=>{
        let selected=event.target.value;
        dispatch(guardarDepartamento(selected))
    }
    
    const departamentos = useSelector(state => state.departamentos.departamentos)

        return (
            <div className="form-floating">
                <select id="floatingDepartamento" className="form-control" required onChange={obtenerDepartamento}>
                    <option key={'defaultDep'} > Departamentos</option>
                    {departamentos.map(dep => <Departamento key={dep['id']}  {...dep} ></Departamento>)}
                </select>
                <label htmlFor="floatingDepartamento">Departamento</label>
            </div>
        )
    }

    export default Departamentos