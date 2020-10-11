import './style.css';
import React from 'react';
import ButtonCounterCard from '../ButtonCounterCard';

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
       <button>-</button>2
       <button>+</button>
       <button deleteCard={this.props.deleteCard} onClick= {this.props.deleteCard.bind(this, e.id)}>Eliminar</button>
    </div>
    )
  }
}
export default CounterCard;