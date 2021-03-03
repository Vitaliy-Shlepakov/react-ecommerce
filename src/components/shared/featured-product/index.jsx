import React from 'react';
import './index.sass';
import {withRouter} from 'react-router-dom';

const FeaturedProduct = ({product, history}) => {
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
                <button className="button is-black nomad-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default withRouter(FeaturedProduct);