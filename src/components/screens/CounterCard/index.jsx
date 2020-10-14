import './style.css';
import React from 'react';

//import ButtonCounterCard from '../ButtonCounterCard';

class CounterCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    const {e} = this.props;
    return (
    <div className="counterCard">
      <div>ID:{e.id}</div>
      <div>Creado por:{e.title}</div>
      <div>Actualizado:{e.description}</div>
      <button className="buttonCard" onClick={this.props.minusNumberCard.bind(this, e.id)}>-</button>{e.number}
      <button className="buttonCard" onClick={this.props.sumNumberCard.bind(this, e.id)}>+</button>
      <button className="buttonCard" onClick= {this.props.deleteCard.bind(this, e.id)}>Eliminar</button>
    </div>
    )
  }
}
export default CounterCard;