import React from 'react'
import Persona from './Persona'

import { useSelector } from 'react-redux'

const Personas = ({ idOcupacion }) => {

  const personas = useSelector(state => state.personas.personas)

  return (
    <tbody>
    {idOcupacion!=='Ocupaciones'?personas.map(p => p.ocupacion === +idOcupacion ? <Persona key={'per' + p['id']} {...p} /> :null):<tr><td><th scope="row">No se han encontrado personas con esa ocupacion</th></td></tr>}
    </tbody>
  )
}

export default Personas