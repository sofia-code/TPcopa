import React from 'react';
import './index.css';
import {Container} from './styled'
import NavBar from '../NavBar'
import Header from '../Header'
import Grilla from '../Grilla'
import Filters from '../Filters'
import Footer from '../Footer';
import Loading from '../Loading';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters:{
        filter1:'select'
        //filter2:'select'
      },
      loading: true,
      selecciones: [],
      seleccionesBkp: [],
      fechas: []
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  async componentDidMount(){
    const response = await fetch('https://copaamericaapi.herokuapp.com/selecciones')

    try {
      const response = await fetch('https://copaamericaapi.herokuapp.com/selecciones')
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json()
      console.log(json)
      const fechas = json.map(({ultimaFinal}) => ultimaFinal)
      const yearsUnrepeated = Array.from(new Set(fechas))
      const yearsUnrepeatedOrdered = yearsUnrepeated.sort((a, b) => (a < b) ? 1 : -1).slice()

      this.setState({
        selecciones: json,
        seleccionesBkp: json, 
        fechas: yearsUnrepeatedOrdered, 
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleFilter(payload){
    const {filter1} = payload
    const {seleccionesBkp} = this.state
    const filteredSelecciones = seleccionesBkp.filter(seleccion => {
      return seleccion.ultimaFinal === (filter1 !== 'select' ? filter1 : seleccion.ultimaFinal)
    })
    return filteredSelecciones
  }

  handleFilterChange(event){
    let payload = this.state.filters 
    payload[event.target.name] = event.target.value
    const seleccionesFiltered = this.handleFilter(payload)
    console.log(seleccionesFiltered)

    this.setState({
      filters: payload,
      selecciones: seleccionesFiltered
    })

    console.log(this.state.filters)
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Header />
        <div className="inner">
          <Filters onFilterChange={this.handleFilterChange} fechas={this.state.fechas}/>
          {!this.state.loading && <Grilla selecciones={this.state.selecciones}/>}
          {this.state.loading && <Loading />}

        </div>
        <Footer />
      </Container>
    )
  }
}

export default App

