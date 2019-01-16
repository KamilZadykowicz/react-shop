import React from 'react'
import './Header.scss';
import Item from './Item';

const ListItems = props => {

    const items = props.items.map(item => (
        <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            brand={item.brand}
            addToCart={props.addToCart}
            quantity={props.quantity}
            img={item.img}
        />
    ))

    return(
        <div className="container">
            {items}
        </div>
    )
}

export default ListItems;