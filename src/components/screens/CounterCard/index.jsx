import './style.css';
import React from 'react';
import ButtonCounterCard from '../ButtonCounterCard';

class CounterCard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {buttonCardName1: "+",buttonCardName2: "-",buttonCardName3:"Eliminar"}
  }
  render(){
    const {e} = this.props;
    return (
    <div className="counterCard">
       ID:{e.id}- Creado por:{e.title}-Actualizado:{e.description}<ButtonCounterCard buttonCardName = {this.state.buttonCardName1} onClick= {e.number +1}/>{e.number} <ButtonCounterCard buttonCardName = {this.state.buttonCardName2} onClick= {e.number -1}/> <ButtonCounterCard buttonCardName = {this.state.buttonCardName3}/>
    </div>
    )
  }
}
export default CounterCard;