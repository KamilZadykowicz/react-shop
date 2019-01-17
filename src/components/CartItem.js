import React from 'react';
import './CartItem.scss';
import Quantity from './Quantity';
import bin from '../img/bin.svg';

const CartItem = props => {
    return (
        // <div className="item">
            
        // </div>
        <div className="cart-item">
            <div className="cart-item__flex cart-item__flex--top">
                <div className="cart-item__box">
                    <img src={props.photo} alt="" className="cart-item__img"/>
                </div>
                <div className="cart-item__description">
                    <h4 className="cart-item__name">{props.name}</h4>
                    <p className="cart-item__brand">{props.brand}</p>
                </div>
                <img src={bin} alt="" className="cart-item__bin"/>
            </div>


                <div className="cart-item__flex cart-item__flex--center">
                    <p className="cart-item__available">Price: ${props.price}</p>
                    <Quantity quantity={props.quantity} addToCart={props.addToCart} removeFromCart={props.removeFromCart} id={props.id} available={props.available}/>
                    <p className="cart-item__price">${props.price*props.quantity}</p>
                    
                </div>
            
        </div>
        )

}

export default CartItem;