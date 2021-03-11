import React, {useContext} from 'react';
import './index.sass';
import { CartContext } from "../../context/cart-context";
import Layout from '../shared/layout';

const Checkout = () => {
    const { itemCount, total } = useContext(CartContext);
    return (
        <Layout>
            <div className="checkout">
                <h2>Checkout Summary</h2>
                <h3>{`total Items: ${itemCount}`}</h3>
                <h3>{`Amount to Pay: $${total}`}</h3>
            </div>
        </Layout>
    );
};

export default Checkout;