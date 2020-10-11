import './style.css';
import React from 'react';
import HomeCard from '../HomeCard';
import Button from '../Button';
import HomeForm from '../HomeForm';


class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {buttonName1: "Agregar", buttonName2: "Elminar"}
  }
  
  render(){
    return (
    <div className="home">
          <div>Alumno</div>
      <HomeCard name = {this.props.name}year = {this.props.year}/> 
      <HomeForm addCard={this.props.addCard}/>
      <div className="buttonsHome">
        <Button buttonName = {this.state.buttonName1}/>
        <Button buttonName = {this.state.buttonName2}/>
      </div>
    </div>
    )
  }
}
export default Home;

