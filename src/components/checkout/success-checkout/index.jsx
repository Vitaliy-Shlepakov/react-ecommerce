import React, {useContext, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Layout from "../shared/layout";
import { CartContext } from "../../context/cart-context";

const SuccessCheckout = ({history}) => {

    const {clearCart} = useContext(CartContext);


    return (
        <Layout>
            <div>
                <h1>
                    Thank's for your order
                </h1>
                <p>
                    We are currently proccessing your order and will send you a confirmation email shortly
                </p>
                <div>
                    <button
                        className="button is-black nomad-btn submit"
                        onClick={() => history.push('/shop')}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default SuccessCheckout;