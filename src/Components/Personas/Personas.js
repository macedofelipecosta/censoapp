import React from 'react'
import Persona from './Persona'

import { useSelector } from 'react-redux'

const Personas = ({ idOcupacion }) => {

  const personas = useSelector(state => state.personas.personas)

  return (
    <tbody>
    {idOcupacion!=='Ocupaciones'? personas.filter(p=>p.ocupacion===+idOcupacion).length>=1?personas.filter(p=>p.ocupacion===+idOcupacion).map(x=><Persona key={'per' + x['id']} {...x} />):<tr><td>No se han encontrado personas con esa ocupacion</td></tr>:<tr><td>No se han encontrado personas con esa ocupacion</td></tr>}
    </tbody>
  )
}

export default Personas