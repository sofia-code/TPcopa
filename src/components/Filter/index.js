import React from 'react'

const Filter = props => {
    const {onFilterChange, name, data = []} = props
    console.log("data: ",data)
    return(
        <select onChange={onFilterChange} name={name}>
            <option value="select">Todos</option>
            {data.map(item => <option value={item} key={item}>{item}</option>)}
        </select>
    )
}

export default Filter