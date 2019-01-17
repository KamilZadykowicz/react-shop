import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Cart from './Cart';
import ListItems from './ListItems';

class App extends Component {

  state = { 
    items: [
        {id: 1, name: "Argentina Authentic Jersey 2018", brand: "adidas", category: "tshirt", img:"../img/1.jpg", price: 130, available: 10, quantity: 0 },
        {id: 2, name: "Brasil Authentic Jersey 2018", brand: "nike", category: "tshirt", img:"../img/2.jpg", price: 165, available: 20, quantity: 0 },
        {id: 3, name: "France Authentic Jersey 2018", brand: "nike", category: "tshirt", img:"../img/3.jpg", price: 140, available: 25, quantity: 0 },
        {id: 4, name: "Mexico Authentic Jersey 2018", brand: "adidas", category: "tshirt", img:"../img/4.jpg", price: 190, available: 15, quantity: 0 },
        {id: 5, name: "Portugal Authentic Jersey 2018", brand: "nike", category: "tshirt", img:"../img/5.jpg", price: 99, available: 20, quantity: 0 },
        {id: 6, name: "Nike Blue Shorts 2018", brand: "nike", category: "shorts", img:"../img/6.jpg", price: 39, available: 5, quantity: 0 },
        {id: 7, name: "Nike run shorts 2018", brand: "nike", category: "shorts", img:"../img/7.jpg", price: 28, available: 8, quantity: 0 },
        {id: 8, name: "Adidas black shorts 2018", brand: "adidas", category: "shorts", img:"../img/8.jpg", price: 45, available: 4, quantity: 0 },
        {id: 9, name: "New 2019 model Adidas shorts", brand: "adidas", category: "shorts", img:"../img/9.jpg", price: 29, available: 2, quantity: 0 },
        
    ],
    toPay: 0,
    numberProducts: 0,
    selectCategory: "all",
    selectBrand: "all",
    filtersVisible: false,
    cartVisible: false,
  }

  handleAddToCart = (id) => {
    let numberProducts = this.state.numberProducts
    const items = this.state.items.map(item => {

      if(id === item.id) {
          
          if(item.available > 0) {
              item.quantity = item.quantity + 1
              item.available = item.available -1
              numberProducts= this.state.numberProducts + 1
          }
      }
      return item
    })

    this.setState({
      numberProducts,
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

  handleChangeCategory = event => {
    console.log(event.target.value)
    const selectCategory = event.target.value
    this.setState({
      selectCategory,
      filtersVisible: false,
    })
  }

  handleChangeBrand = (event) => {
    console.log(event.target.value)
    const selectBrand = event.target.value
    this.setState({
      selectBrand,
      filtersVisible: false,
    })
  }

  handleClickFiltersVisible = () => {
    this.setState({
      filtersVisible: !this.state.filtersVisible
    })
  }

  handleClickCart = () => {
    this.setState({
      cartVisible: true
    })
  }

  handleClickBack = () => {
    this.setState({
      cartVisible: false
    })
  }


  render() {
    return (
      <div>
          <Header numberProducts={this.state.numberProducts} handleClickCart={this.handleClickCart}/>

          {this.state.cartVisible===true ? 
          <Cart handleClickBack={this.handleClickBack} items={this.state.items}/> : 
          <ListItems items={this.state.items} filtersVisible={this.state.filtersVisible} selectCategory={this.state.selectCategory} selectBrand={this.state.selectBrand} addToCart={this.handleAddToCart} removeFromCart={this.handleRemoveFromCart} handleChangeCategory={this.handleChangeCategory} handleChangeBrand={this.handleChangeBrand} handleClickFiltersVisible={this.handleClickFiltersVisible}/>}
          
            
          

          <footer>&copy; 2019 SHOPP</footer>
      </div>
    );
  }
}

export default App;
