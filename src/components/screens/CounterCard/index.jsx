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
       ID:{e.id}- Creado por:{e.title}-Actualizado:{e.description}
       <button onClick={this.props.minusNumberCard}>-</button>{e.number}
       <button onClick={this.props.sumNumberCard}>+</button>
       <button onClick= {this.props.deleteCard.bind(this, e.id)}>Eliminar</button>
    </div>
    )
  }
}
export default CounterCard;