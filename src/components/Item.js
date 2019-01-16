import React from 'react';
import img from '../img/1.jpg';
import './Item.scss';

const Item = props => {

    return (
        <div className="item">
            <div className="item__box">
                <img src={img} alt="" className="item__img"/>
            </div>
            <div className="item__description">
                <h4 className="item__name">{props.name}</h4>
                <p className="item__brand">{props.brand}</p>
                <div className="item__flex">
                    <p className="item__price">${props.price}</p>
                    <p onClick={props.addToCart} className="item__btn">ADD TO CART</p>
                </div>
            </div>
        </div>
    )
}

export default Item;