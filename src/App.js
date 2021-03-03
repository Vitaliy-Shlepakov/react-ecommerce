import './App.scss';
import ProductsContextProvider from './context/products-context';
import HomePage from "./components/pages/home";
import {Switch, Route} from 'react-router-dom';
import NotFound from "./components/pages/404";
import Shop from "./components/pages/shop";
import SingleProduct from "./components/pages/single-product";

function App() {
    return (
        <ProductsContextProvider>
            <div className="App">
                <Switch>
                    <Route
                        component={HomePage}
                        path="/"
                        exact
                    />
                    <Route
                        component={Shop}
                        path="/shop"
                        exact
                    />
                    <Route
                        component={SingleProduct}
                        path="/product/:id"
                    />
                    <Route
                        component={NotFound}
                        path="*"
                    />
                </Switch>
            </div>
        </ProductsContextProvider>
    );
}

export default App;
