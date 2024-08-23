import React from 'react'
import styles from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {

    state = {
        cantidad: 0
    }

    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1
    })

    quitar = () => this.setState({
        cantidad: this.state.cantidad - 1
    })

    limpiar = () => this.setState({
        cantidad: 0
    })

    render() {
        const tieneElementos = this.state.cantidad > 0

        const claseActiva = tieneElementos ? styles['card-active'] : ''
        const clases = styles.card + ' ' + claseActiva

        /*         const styles = {
            border: '1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: tieneElementos ? 'linear-gradient(45deg, black, #4a02f7)': 'white',
            color: tieneElementos > 0 ? 'white': 'black',
            transition: 'all 400ms ease-out'
        } */

        return (
            /*            <div style={styles}>*/
            <div className={clases}>
                <h3>{this.props.name}</h3>
                <div>Cantidad: {this.state.cantidad}</div>
                <button
                    onClick={this.agregar}
                >
                    +</button>
                <button
                    onClick={this.quitar}
                >
                    -</button>
                <button
                    onClick={this.limpiar}
                >
                    Limpiar</button>
                <hr />
                <p>$ {this.props.price}</p>
                <p>
                    Total: ${this.props.price * this.state.cantidad}
                </p>
            </div>
        )
    }
}

export default TarjetaFruta