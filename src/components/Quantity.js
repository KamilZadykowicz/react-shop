import React from 'react';
import './Quantity.scss';

const Quantity = props => {
    return (
        <div className="quantity">
            <span onClick={() => props.removeFromCart(props.id)} className="quantity__active">-</span>
            <span className="quantity__number">{props.quantity}</span>
            <span onClick={() => props.addToCart(props.id)} className={props.available>0 ? "quantity__active" : "quantity__notactive"}>+</span>
        </div>
    )
}

export default Quantity