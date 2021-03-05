import React, {useContext} from 'react';
import './index.sass';
import {withRouter} from 'react-router-dom';
import { isInCart } from "../../../helpers";
import { CartContext } from "../../../context/cart-context";

const FeaturedProduct = ({product, history}) => {

    const {cartItems, addProduct} = useContext(CartContext);

    return (
        <div className="featured-product">
            <div className="featured-image"
                onClick={() => history.push(`/product/${product.id}`)}
            >
                <img src={product.imageUrl} alt="product"/>
            </div>
            <div className="name-price">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <button
                    className="button is-black nomad-btn"
                    onClick={() => !isInCart(product, cartItems) ? addProduct(product) : () => {}}
                >
                    {
                        !isInCart(product, cartItems) ? 'Add to Cart' : 'Add more'
                    }
                </button>
            </div>
        </div>
    );
};

export default withRouter(FeaturedProduct);