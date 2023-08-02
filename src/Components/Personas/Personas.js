import React from 'react'
import Persona from './Persona'

import { useSelector } from 'react-redux'

const Personas = () => {

  const personas = useSelector(state => state.personas.personas)

  return (
    <tbody>
      {personas.map(p => <Persona key={'per' + p['id']} {...p} />)}
    </tbody>
  )
}

export default Personas