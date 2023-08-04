import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const CensoMvdInt = () => {

    const personas = useSelector(state => state.personas.personas)


    useEffect(() => {
        personasMvd();
        personasInt();
    }, [personas])


    const personasMvd = () => {

        let cantidad = 0;
        personas.map(p => {
            if (p.departamento === 3218) {
                cantidad++
            }
        })
        return cantidad
    }
    const personasInt = () => {

        let cantidad = 0;
        personas.map(p => {
            if (p.departamento !== 3218) {
                cantidad++
            }
        })
        return cantidad
    }


    return (
        <div style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
            border: "1px solid #e6e6e6",
            padding: "40px 25px",
            marginTop: "50px"

        }}>
            <p>Censados Montevideo:{personasMvd()}</p>
            <br />
            <p>Censados interior:{personasInt()}</p>
        </div>
    )
}

export default CensoMvdInt