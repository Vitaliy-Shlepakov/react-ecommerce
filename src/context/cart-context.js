import React, {useReducer, createContext} from 'react';
import cartReducer from "./cart-reducer";

export const CartContext = createContext();

const initialState = {
    cartItems: [],
    itemCount: 0,
    total: 0,
};

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{...state}}>
            { children }
        </CartContext.Provider>
    )
}