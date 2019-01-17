import React from 'react'
import './ListItems.scss';
import Item from './Item';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';

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
]

const ListItems = props => {
    let items = props.items;
    
    const itemsBrands = () => {
        if(props.selectBrand === "all") {

        }
        else if(props.selectBrand === "adidas") {
            items = items.filter(item => item.brand === "adidas")
        }
        else if(props.selectBrand === "nike") {
            items = items.filter(item => item.brand === "nike")
        }
    }

    const itemsCategory = () => {
        
        switch(props.selectCategory) {
          case "all" :
            itemsBrands()
            return items.map(item => (
                    <Item 
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
                    />
                ))
          case "tshirt" :
            items = items.filter(item => item.category === "tshirt")
            itemsBrands()
            return items.map(item => (
                <Item 
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
                />
            ))
          case "shorts" :
            items = items.filter(item => item.category === "shorts")
            itemsBrands()
            return items.map(item => (
                <Item 
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
                />
            ))
          default:
            return "brak danych"
        }
      }


    // const items = props.items.map(item => (
    //     <Item 
    //         key={item.id}
    //         id={item.id}
    //         name={item.name}
    //         price={item.price}
    //         brand={item.brand}
    //         quantity={item.quantity}
    //         available={item.available}
    //         img={item.img}
    //         addToCart={props.addToCart}
    //         removeFromCart={props.removeFromCart}
    //         photo={photos[item.id-1].photo}
    //     />
    // ))

    return(
        <div className="container">
            <div className="main-box">


                {/* box with filters */}
                <div className={props.filtersVisible ? "category__box--show category__box" : "category__box--hide category__box"}>
                    <p onClick={props.handleClickFiltersVisible} className="category__close">X</p>
                    <div>
                        <p>Category</p>
                        <select onChange={props.handleChangeCategory} value={props.selectCategory} name="category" id="category">
                            <option value="all">All</option>
                            <option value="tshirt">T-shirts</option>
                            <option value="shorts">Shorts</option>
                        </select>
                    </div>
                    <div>
                        <p>Brand</p>
                        <select onChange={props.handleChangeBrand} value={props.selectBrand} name="brand" id="brand">
                            <option value="all">All</option>
                            <option value="nike">Nike</option>
                            <option value="adidas">Adidas</option>
                        </select>
                    </div>
                </div>

                <div className="filters">
                    <p onClick={props.handleClickFiltersVisible} className="filters__btn">FILTER</p>
                    <p className="filters__btn">SORT</p>
                </div>

                {itemsCategory()}
            </div>
        </div>
    )
}

export default ListItems;