import './reset.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './screens/Home';
import Counter from './screens/Counter';
import card from './cards.json';
import Button from '../components/screens/Button';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "asd", year: 2013, idCard: 2, card: card, buttonName1: "Lista de contadores", buttonName2: "Añadir contador" }
  }
  addCard = () => {
    this.state.idCard = this.state.idCard +1;
    console.log(this.state.idCard)
    const newCard = {
      id: this.state.idCard,
      name: this.state.name,
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
      <BrowserRouter>
        <div className= "wrapper">
          <Route exact path="/home">
            <Home 
              name={this.state.name}
              year={this.state.year}
            />
            <Link to = "/counter">
            <Button buttonName = {this.state.buttonName1}/>
          </Link>
          </Route>
          
          <Route exact path="/counter">
            <Link to = "/home">
              <Button buttonName = {this.state.buttonName2}/>
            </Link>
            <Counter 
                card = {this.state.card}
                addCard={this.addCard}
                deleteCard={this.deleteCard}
                sumNumberCard={this.sumNumberCard}
                minusNumberCard={this.minusNumberCard}
              />
          </Route>
        </div>      
      </BrowserRouter>
      
    )
  }
}
export default App;
