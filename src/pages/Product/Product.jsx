/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,handleAddToCart}) => {
    const {img,name,ratings,price,seller} = product
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className="product-details">
                <h4>{name}</h4>
                <h6>Price:{price}</h6>

                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='cart-button'>Add To Cart <FontAwesomeIcon icon={ faCartArrowDown} /></button>
        </div>
    );
};

export default Product;