import React, {Component}from "react";

class Recordatorio extends Component{
render(){
    return (
        <div className="recordatorio">
            <h3>Seleccion Anterior: {this.props.seleccionAnterior}</h3>
            <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.historial}</ul>
            </div>
        )
    }
}

export default Recordatorio;