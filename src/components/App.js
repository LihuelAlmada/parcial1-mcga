import './reset.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Home from './screens/Home';
import Counter from './screens/Counter';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: "Lihuel", year: 1996, idCard: 0, card: [], edit: false }
  }
  addCard = () => {
    this.setState({idCard: this.state.idCard + 1})
    const newCard = {
      id: this.state.idCard,
      name: this.state.name,
      create: "10/20/2020, 8:51:45 PM",
      update: "10/21/2020, 8:55:57 PM",
      number: 0
    }
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
  changeEdit =() =>{
    this.setState({
      name: this.state.name,
      year: this.state.year,
      edit: this.state.edit ? false : true
    }) 
  }
  setValues = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <BrowserRouter>
        <div className= "wrapper">
          <Redirect to="/home"/>
          <Route exact path="/home">
            <Home 
              name={this.state.name}
              year={this.state.year}
              edit={this.state.edit}
              changeEdit={this.changeEdit}
              saveValues={this.saveValues}
              setValues={this.setValues}
            />
          </Route>
          <Route exact path="/counter">
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
