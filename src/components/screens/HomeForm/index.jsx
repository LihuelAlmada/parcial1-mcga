import './style.css';
import React from 'react';

class HomeForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "", year: ""}
  }
  render(){
    return (
      <div className="homeForm">
        <input type="text" name="name" placeholder="" onChange={this.props.setValues} defaultValue={this.props.name}/> 
        <input type="text" name="year" placeholder="" onChange={this.props.setValues} defaultValue={this.props.year}/> 
        <button className="button" onClick={this.props.changeEdit}>Guardar informacion</button>
      </div>
    )
  }
}
export default HomeForm;

