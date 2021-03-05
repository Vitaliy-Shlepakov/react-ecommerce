import React, {useContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {ProductsContext} from "../../../context/products-context";
import { CartContext } from "../../../context/cart-context";
import {isInCart} from "../../../helpers";
import Layout from "../../shared/layout";
import './index.sass'

const SingleProduct = ({match, history}) => {
    const { products } = useContext(ProductsContext);
    const {addProduct, increase, cartItems} = useContext(CartContext);

    const { id } =  match.params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = products.find(item => (item.id * 1) === id * 1);
        if(!product){
            return history.push('/shop')
        }
        setProduct(product);
    }, []);

    if(!product){
        return <p>Loading...</p>
    }
    const {imageUrl, title, price, description} = product;
    const itemInCart = isInCart(product, cartItems);
    return (
        <Layout>
            <div className="single-product-container">
                <div className="product-image">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="product-details">
                    <div className="name-price">
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                    <div className="add-to-cart-btns">
                        {
                            !itemInCart
                                ?(
                                    <button
                                        className="button is-white nomad-btn"
                                        id="btn-white-outline"
                                        onClick={() => addProduct(product)}
                                    >
                                        ADD TO CART
                                    </button>
                                )
                                :(
                                    <button
                                        className="button is-white nomad-btn"
                                        id="btn-white-outline"
                                        onClick={() => increase(product)}
                                    >
                                        ADD MORE
                                    </button>
                                )
                        }

                        <button className="button is-black nomad-btn" id="btn-white-outline">
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                    <div className="product-description">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default withRouter(SingleProduct);