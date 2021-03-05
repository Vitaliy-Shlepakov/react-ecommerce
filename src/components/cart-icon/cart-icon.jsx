import React, {useContext} from 'react';
import shoppingBag from '../../assets/basket.png';
import './cart-icon.scss';
import { CartContext } from '../../context/cart-context';

const CartIcon = () => {
    const {itemCount} = useContext(CartContext);

    return (
        <div className="cart-container">
            <img src={shoppingBag} alt=""/>
            {
                itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null
            }
        </div>
    );
};

export default CartIcon;