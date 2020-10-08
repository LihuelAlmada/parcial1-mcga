import './reset.css';
import './App.css';
import React from 'react';
import Home from './screens/Home';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "asd", year: 2013}
  }
  render(){
    return (
      <div className= "wrapper">
        <Home 
        name={this.state.name}
        year={this.state.year}
        />
      </div>      
    )
  }
}
export default App;
