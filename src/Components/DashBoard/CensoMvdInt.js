import React from 'react'
import { useSelector } from 'react-redux'

const CensoMvdInt = () => {

    const personas = useSelector(state => state.personas.personas)

    const personasMvd = () => {

            let cantidad=0;
            personas.map(p=>{
                if (p.departamento===3218) {
                    cantidad++
                }
            })
            return cantidad
    }
    const personasInt = () => {

        let cantidad=0;
        personas.map(p=>{
            if (p.departamento!==3218) {
                cantidad++
            }
        })
        return cantidad
}


    return (
        <div>
            <p>Censados Montevideo:{personasMvd()}</p>
            <br />
            <p>Censados interior:{personasInt()}</p>
        </div>
    )
}

export default CensoMvdInt