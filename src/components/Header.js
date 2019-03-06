import React from 'react'
import shoppingCart from '../img/shopping-cart.svg';
import './Header.scss';

const Header = props => {
    return(
        <header>
            <div className="container">
                <div className="header">
                    <div className="header__menu">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </div>
                    <h4 className="header__title">SHOPP The Best Brands</h4>
                    <div onClick={props.handleClickCart} className="header__cart">
                        <img  className="header__cart--img" src={shoppingCart} alt=""/>
                        {props.numberProducts>0 && <p className="header__num">{props.numberProducts}</p>}
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;