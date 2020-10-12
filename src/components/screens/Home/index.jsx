import './style.css';
import React from 'react';
import HomeCard from '../HomeCard';
//import Button from '../Button';
import HomeForm from '../HomeForm';


class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {buttonName1: "Agregar", buttonName2: "Agregar contador"}
  }
  
  render(){
    return (
      <div className="home">
            <div>Alumno</div>
        <HomeCard name = {this.props.name}year = {this.props.year}/> 
        <HomeForm />
      </div>
        
      
    )
  }
}
export default Home;

