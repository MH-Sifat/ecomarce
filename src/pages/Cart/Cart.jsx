/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = ({cart ,addToClear}) => {
    let total = 0;
    let quantity = 0;
    let shipping = 0;
    for(const cartProduct of cart){
        quantity = quantity + cartProduct.quantity;
        total = total + cartProduct.price * cartProduct.quantity;
        shipping = shipping + cartProduct.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping +tax;
    return (
        <div className='cart'>
           <h5>Order Summary</h5>
           <p>Selected Items: {quantity}</p>
           <p>Total Price:{total}</p>
           <p>Shipping Cost:{shipping}</p>
           <p>Tax:{tax}</p>
           <h5>Grand Total:{grandTotal}</h5>
           <button onClick={()=> addToClear()}>clear</button>
        </div>
    );
};

export default Cart;