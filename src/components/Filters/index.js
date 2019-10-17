import React from 'react' 
import Filter from '../Filter'
import {Container} from './styled'

const Filters = (props) => {
    const {onFilterChange, fechas} = props

    return(
        <Container>
            <h2>Filtrar por fecha: </h2>
            <Filter onFilterChange={onFilterChange} name="filter1" data={fechas} />
        </Container>
    )
}
export default Filters