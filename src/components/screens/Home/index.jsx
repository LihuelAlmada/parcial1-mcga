import './style.css';
import React from 'react';
import HomeCard from '../HomeCard';
import Button from '../Button';

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {buttonName1: "Agregar", buttonName2: "Elminar", edit: false}
  }
  render(){
    return (
    <div className="home">
      <HomeCard name = {this.props.name}year = {this.props.year} edit = {this.props.edit} /> 
      <div className="buttonsHome">
        <Button buttonName = {this.state.buttonName1}/>
        <Button buttonName = {this.state.buttonName2}/>
      </div>
    </div>
    )
  }
}
export default Home;

