import './style.css';
import React from 'react';
import CounterCard from '../CounterCard';

class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  eliminateCard(){
    return{
      display: 'none'
    }
  }
  render(){
    return (
    <div className="counter">
      <h1>Lista de contadores</h1>
      { this.props.card.map(e => <CounterCard e={e} key={e.id}/>)}
    </div>
    )
  }
}
export default Counter;