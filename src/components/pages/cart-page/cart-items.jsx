import React from 'react';
import {
    PlusCircleIcon,
    MinusCircleIcon,
    TrashIcon,
} from '../../../icons';
import './index.sass';

const CartItems = (product) => {

    const { title, imageUrl, price, quantity } = product;

    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img src={imageUrl} alt="product"/>
            </div>
            <div className="name-price">
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
            <div className="quantity">
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className="btns-container">
                <button className="btn-increase">
                    <PlusCircleIcon/>
                </button>
                {
                    quantity === 1 &&
                        <button className="btn-trash">
                            <TrashIcon/>
                        </button>
                }
                {
                    quantity > 1 &&
                        <button className="btn-increase">
                            <MinusCircleIcon/>
                        </button>
                }
            </div>
        </div>
    );
};

export default CartItems;