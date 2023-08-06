/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts] = useState([])

    const [cart, setCart] =useState([])

    useEffect(()=>{
        fetch('product.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    })

const handleAddToCart = (selectedProduct) =>{ 

    let newCart = [];

    const exist = cart.find(product => product.id === selectedProduct.id)

    if(!exist){
        selectedProduct.quantity = 1;
        newCart =[...cart, selectedProduct]
    }
    else{
       const rest = cart.filter(product => product.id !== selectedProduct.id) 
       exist.quantity = exist.quantity + 1;
       newCart = [...rest,exist]
    }

    setCart(newCart) 
}    

const addToClear = () => {
    setCart([ ])
}
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product ={product}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart
                addToClear ={addToClear}
                cart={cart}
                ></Cart>  
            </div>
        </div>
    );
};

export default Shop;

