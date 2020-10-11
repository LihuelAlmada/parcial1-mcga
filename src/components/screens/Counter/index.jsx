import './style.css';
import React from 'react';
import CounterCard from '../CounterCard';

class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render(){
    return (
    <div className="counter">
      <h1>Lista de contadores</h1>
      { this.props.card.map(e => 
      <CounterCard 
        e={e} 
        key={e.id} 
        deleteCard={this.props.deleteCard} 
        sumNumberCard={this.props.sumNumberCard}
        minusNumberCard={this.props.minusNumberCard}/>)}
    </div>
    )
  }
}
export default Counter;