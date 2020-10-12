import './reset.css';
import './App.css';
import React from 'react';
import Home from './screens/Home';
import Counter from './screens/Counter';
import card from './cards.json'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "asd", year: 2013, idCard: 2, card: card, }
  }
  addCard = (name) => {
    this.state.idCard = this.state.idCard +1;
    console.log(this.state.idCard)
    const newCard = {
      id: this.state.idCard,
      name: name,
      create: "10/20/2020, 8:51:45 PM",
      update: "10/21/2020, 8:55:57 PM",
      number: 0
    }
    console.log(newCard);
    this.setState({
      card: [...this.state.card, newCard]
    })
  }
  deleteCard = (id) => {
    const newCard = this.state.card.filter(card => card.id !== id);
    this.setState({card: newCard})
  }
  sumNumberCard = (id) => {
    const newCard = this.state.card.map(card => {
      if (card.id === id){
        card.number ++;
      }
      return card;
    });
    this.setState({card: newCard})
  }
  minusNumberCard = (id) => {
    const newCard = this.state.card.map(card => {
      if (card.id === id){
        card.number --;
      }
      return card;
    });
    this.setState({card: newCard})
  }
  
  render(){
    return (
      <div className= "wrapper">
        <Home 
          name={this.state.name}
          year={this.state.year}
          addCard={this.addCard}
        />
        <Counter 
          card = {this.state.card} 
          deleteCard={this.deleteCard}
          sumNumberCard={this.sumNumberCard}
          minusNumberCard={this.minusNumberCard}
        />
      </div>      
    )
  }
}
export default App;
