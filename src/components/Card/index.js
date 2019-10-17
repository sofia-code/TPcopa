import React from 'react' 
import { Container } from './styled'

const Card = (props) => {
    console.log("card: "+props)
    const {jugDestacados, imagen, nombre, ultimaFinal, siglas, puntosTotales} = props.seleccionData
    const jugadores = jugDestacados.map(jugador => {
        return (`${jugador} `)
    })
    return(
        <Container>
            <img src={imagen} />
            <div className="info">
                <h2>{nombre}</h2>
                <h4>{siglas}</h4>
                <div className="ultFinalPuntos">
                    <p><span>&Uacute;ltima final: </span> {ultimaFinal}</p>
                    <p><span>Puntos finales: </span> {puntosTotales}</p>
                </div>
                <p><span>Jugadores destacados: </span> {jugadores}</p>
            </div>
        </Container>
    )
}

export default Card