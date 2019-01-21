import React from 'react';
import './Cart.scss';
import CartItem from './CartItem';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';
import img10 from '../img/shoes1.jpg';
import img11 from '../img/shoes2.jpg';
import img12 from '../img/shoes3.jpg';
import img13 from '../img/shoes4.jpg';
import img14 from '../img/shoes5.jpg';
import img15 from '../img/shoes6.jpg';
import img16 from '../img/shoes7.jpg';
import img17 from '../img/shoes8.jpg';
import img18 from '../img/shoes9.jpg';

const photos = [
    {photo: img1},
    {photo: img2},
    {photo: img3},
    {photo: img4},
    {photo: img5},
    {photo: img6},
    {photo: img7},
    {photo: img8},
    {photo: img9},
    {photo: img10},
    {photo: img11},
    {photo: img12},
    {photo: img13},
    {photo: img14},
    {photo: img15},
    {photo: img16},
    {photo: img17},
    {photo: img18},
    {photo: img17},
    {photo: img18},
]

// let totalPrice = 0

const Cart = props => {

    let items = props.items;
    

    const cartShow = () => {
        items = items.filter(item => item.quantity > 0)
        
        return items.map(item => (
            
            <CartItem 
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                brand={item.brand}
                quantity={item.quantity}
                available={item.available}
                img={item.img}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                photo={photos[item.id-1].photo}
                handleTotalRemoveFromCart={props.handleTotalRemoveFromCart}
            />
            
        ))
         
    }

    const totalPriceFn = () => {
        let totalPrice = 0
        for (var i=0; i < items.length; i++)
            {
                totalPrice = totalPrice + (items[i].quantity * items[i].price)
            }
            return totalPrice
    }

    return (
        <div className="cart">
            <div className="container">
                <h3 className="cart__title">
                	Your Cart
                </h3>
                {cartShow()}
                
                <div className="cart__summary">
                    <div className="cart__flex">
                        <p className="cart__p">Subtotal:</p>
                        <p className="cart__p">&{totalPriceFn()}</p>
                    </div>
                    <div className="cart__flex">
                        <p className="cart__p">Shipping:</p>
                        <p className="cart__p">&0</p>
                    </div>
                    <div className="cart__flex">
                        <p className="cart__total">Total:</p>
                        <p className="cart__total">&{totalPriceFn()}</p>
                    </div>
                </div>
                <div className="cart__flex">
                    <p onClick={props.handleClickBack} className="cart__btn--back">BACK</p>
                    <p className="cart__btn--checkout">CONTINUE TO CHECKOUT</p>
                </div>
            </div>
        </div>
    )
}

export default Cart;