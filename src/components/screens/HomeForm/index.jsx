import './style.css';
import React from 'react';



class HomeForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "", year: ""}
  }
  onSubmit= (e) => {
    console.log('enviando');
    this.props.addCard(this.state.name,this.state.year);
    e.preventDefault();
    
  }
  onChange = (e) =>{
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    
    return (
    <form className="homeForm" onSubmit={this.onSubmit}>
      <input type="text" name="name" placeholder="" onChange={this.onChange} value={this.state.name}/> 
      <input type="text" name="year" placeholder="" onChange={this.onChange} value={this.state.year}/> 
      <button>Agregar contador</button>
    </form>
    )
  }
}
export default HomeForm;

