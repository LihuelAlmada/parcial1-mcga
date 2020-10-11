import './style.css';
import React from 'react';

class CounterCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
    <button className="buttonCounterCard">{this.props.buttonCardName}</button>
    )
  }
}
export default CounterCard;