import React from 'react';
import './Item.scss';

const CartItem = props => {
    return (
        // <div className="item">
            
        // </div>
        <div className="item">
        <div className="item__box">
            <img src={props.photo} alt="" className="item__img"/>
        </div>
        <div className="item__description">
            <h4 className="item__name">{props.name}</h4>
            <p className="item__brand">{props.brand}</p>
            <div className="item__flex">
                <p className="item__price">${props.price}</p>
                
            </div>
            <p className="item__available">AVAILABLE: {props.available}</p>
            
        </div>
    </div>
        )

}

export default CartItem;