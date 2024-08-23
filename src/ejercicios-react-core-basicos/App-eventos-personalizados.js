import React, { Component } from 'react'
import './global-eventos-personalizados.css'

class Hijo extends Component {

  manejadorClick = () => {
    this.props.onSaluda('Hola Pa, soy un Ninja en React 🔥')
  }

  render () {
    return (
      <div className='box blue'>
        <h2>Hijo</h2>
        <button
          onClick={this.manejadorClick}
        >
          Saluda
        </button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    name: ''
  }

  manejador = (name) => {
    this.setState({ name })
  }

  render () {
    return (
      <div className='box red'>
        <Hijo
          onSaluda={this.manejador}
        />
        <h1>Padre</h1>
        <h2>
          Saludo de mi hijo: { this.state.name }
        </h2>
      </div>
    )
  }
}

export default App
