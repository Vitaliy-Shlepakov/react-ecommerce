import React, {useContext} from 'react';
import Layout from "../../shared/layout";
import FeaturedProduct from "../../shared/featured-product";
import { ProductsContext } from "../../../context/products-context";
import './index.sass';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <Layout>
            <div className="product-list-container container">
                <h2 className="product-list-title">Shop</h2>
                <div className="product-list">
                    {
                        products.map(product => (
                            <FeaturedProduct
                                product={product}
                                key={product.id}
                            />
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
};

export default Shop;