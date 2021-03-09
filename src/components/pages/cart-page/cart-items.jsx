import React from 'react';
import PlusIcon from './icons/plus.svg';
import MinusIcon from './icons/minus.svg';
import TrashIcon from './icons/trash.svg';
import './index.sass';

const CartItems = ({ product, increase, decrease, removeProduct }) => {

    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img src={product.imageUrl} alt="product"/>
            </div>
            <div className="name-price">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
            </div>
            <div className="quantity">
                <p>{`Quantity: ${product.quantity}`}</p>
            </div>
            <div className="btns-container">
                <button
                    className="btn-increase"
                    onClick={() => increase(product)}
                >
                    <img src={PlusIcon} alt=""/>
                </button>
                {
                    product.quantity === 1 &&
                        <button
                            className="btn-trash"
                            onClick={() => removeProduct(product)}
                        >
                            <img src={TrashIcon} alt=""/>
                        </button>
                }
                {
                    product.quantity > 1 &&
                        <button
                            className="btn-decrease"
                            onClick={() => decrease(product)}
                        >
                            <img src={MinusIcon} alt=""/>
                        </button>
                }
            </div>
        </div>
    );
};

export default CartItems;