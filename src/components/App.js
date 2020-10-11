import './reset.css';
import './App.css';
import React from 'react';
import Home from './screens/Home';
import Counter from './screens/Counter';
import card from './cards.json'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "asd", year: 2013, card: card}
  }
  addCard = (name, year) => {
    
    const newCard = {
      id: this.state.card.length,
      name: name,
      year: year
    }
    console.log(newCard);
    this.setState({
      card: [...this.state.card, newCard]
    })
  }
  render(){
    return (
      <div className= "wrapper">
        <Home 
        name={this.state.name}
        year={this.state.year}
        addCard={this.addCard}
        />
        <Counter card = {this.state.card}/>
        
      </div>      
    )
  }
}
export default App;
