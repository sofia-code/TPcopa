import React from 'react' 
import { Container } from './styled'
import Card from '../Card'

const Grilla = ({selecciones}) => {
    console.log("en grilla: ",selecciones)
    return(
        <Container>
            {selecciones.map(seleccion => <Card seleccionData={seleccion} />)}
        </Container>
    )
}

export default Grilla