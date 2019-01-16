import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import ListItems from './ListItems';

class App extends Component {

  state = { 
    items: [
        {id: 1, name: "Argentina Authentic Jersey 2018", brand: "adidas", category: "tshirt", img:"../img/1.jpg", price: 130, available: 10, quantity: 0 },
        {id: 2, name: "Brasil Authentic Jersey 2018", brand: "nike", category: "tshirt", img:"../img/2.jpg", price: 165, available: 20, quantity: 0 },
        {id: 3, name: "France Authentic Jersey 2018", brand: "nike", category: "tshirt", img:"../img/3.jpg", price: 140, available: 25, quantity: 0 },
        {id: 4, name: "Mexico Authentic Jersey 2018", brand: "adidas", category: "tshirt", img:"../img/4.jpg", price: 190, available: 15, quantity: 0 },
        {id: 5, name: "Portugal Authentic Jersey 2018", brand: "nike", category: "tshirt", img:"../img/5.jpg", price: 99, available: 20, quantity: 0 },
        
    ],
    toPay: 0,
    numberProducts: 0,
    selectCategory: "all",
  }

  handleAddToCart = (id) => {
    
    const items = this.state.items.map(item => {

      if(id === item.id) {
          
          if(item.available > 0) {
              item.quantity = item.quantity + 1
              item.available = item.available -1
          }
      }
      return item
    })

    this.setState({
      numberProducts: this.state.numberProducts + 1,
      items
    })
  }

  handleRemoveFromCart = (id) => {
    const items = this.state.items.map(item => {

      if(id === item.id) {
          
          if(item.quantity > 0) {
              item.quantity = item.quantity - 1
              item.available = item.available + 1
          }
      }
      return item
    })

    this.setState({
      numberProducts: this.state.numberProducts - 1,
      items
    })
  }

  render() {
    return (
      <div>
          <Header numberProducts={this.state.numberProducts}/>
          <ListItems items={this.state.items} selectCategory={this.state.selectCategory} addToCart={this.handleAddToCart} removeFromCart={this.handleRemoveFromCart}/>
      </div>
    );
  }
}

export default App;
