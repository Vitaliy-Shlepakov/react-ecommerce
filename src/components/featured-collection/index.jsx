import React, {useContext} from 'react';
import {ProductsContext} from "../../context/products-context";
import FeaturedProduct from "../shared/featured-product";

const FeaturedCollection = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className="featured-collection container">
            <h2 className="featured-collection-title">Featured Collection</h2>
            <div className="products">
                {
                    products.filter((_, i) => i < 4).map(product => {
                        return (
                            <FeaturedProduct
                                product={product}
                                key={product.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedCollection;