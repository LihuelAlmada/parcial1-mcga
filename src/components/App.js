import './reset.css';
import './App.css';
import React from 'react';
import Home from './screens/Home';
import Counter from './screens/Counter';
import card from './carts.json'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "asd", year: 2013, edit: true, card: card}
  }
  render(){
    return (
      <div className= "wrapper">
        {this.state.edit ? <Home 
        name={this.state.name}
        year={this.state.year}
        /> : console.log("edit screen")}
        <Counter card = {this.state.card}/>
        
      </div>      
    )
  }
}
export default App;
