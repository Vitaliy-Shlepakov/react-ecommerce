import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './context/cart-context';


ReactDOM.render(
    <BrowserRouter>
        <CartContextProvider>
            <App/>
        </CartContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
;

reportWebVitals();
