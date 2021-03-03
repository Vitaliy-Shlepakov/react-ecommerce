import React from 'react';
import shoppingBag from '../../assets/basket.png';
import './cart-icon.scss';

const CartIcon = () => {
    return (
        <div className="cart-container">
            <img src={shoppingBag} alt=""/>
            <span className='cart-count'>5</span>
        </div>
    );
};

export default CartIcon;