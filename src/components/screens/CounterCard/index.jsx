import './style.css';
import React from 'react';

class CounterCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    const {e} = this.props;
    return (
      <div className="counterCard">
        <div>Creado por: {e.name}</div>
        <div>Creado: {e.create}</div>
        <div>Actualizado: {e.update}</div>
        <div className="grupButtonCard">
          <button className="buttonCard" onClick={this.props.minusNumberCard.bind(this, e.id)}>-</button>{e.number}
          <button className="buttonCard" onClick={this.props.sumNumberCard.bind(this, e.id)}>+</button>
          <button className="buttonCard" onClick= {this.props.deleteCard.bind(this, e.id)}>Eliminar</button>
        </div>
      </div>
    )
  }
}
export default CounterCard;