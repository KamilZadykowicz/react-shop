import React from 'react';
// import img from '../img/1.jpg';
import './Item.scss';
import Quantity from './Quantity';

const Item = props => {
    return (
        <div className="item">
            <div className="item__box">
                <img src={props.photo} alt="" className="item__img"/>
            </div>
            <div className="item__description">
                <h4 className="item__name">{props.name}</h4>
                <p className="item__brand">{props.brand}</p>
                <div className="item__flex">
                    <p className="item__price">${props.price}</p>
                    {props.quantity === 0 ?  <p onClick={() => props.addToCart(props.id)} className="item__btn">ADD TO CART</p> : <Quantity quantity={props.quantity} addToCart={props.addToCart} removeFromCart={props.removeFromCart} id={props.id} available={props.available}/>}
                </div>
                <p className="item__available">AVAILABLE: {props.available}</p>
                
            </div>
        </div>
    )
}

export default Item;