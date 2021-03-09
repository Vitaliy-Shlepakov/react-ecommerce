import React, {useContext, useEffect} from 'react';
import shoppingBag from '../../assets/basket.png';
import './index.scss';
import { CartContext } from '../../context/cart-context';
import {withRouter} from 'react-router-dom';

const CartIcon = ({history}) => {
    const {itemCount, cartItems} = useContext(CartContext);
    return (
        <div className="cart-container"
            onClick={() => history.push('/cart')}
        >
            <img src={shoppingBag} alt=""/>
            {
                itemCount > 0 ? <span className='cart-count'>{itemCount}</span> : null
            }
        </div>
    );
};

export default withRouter(CartIcon);
