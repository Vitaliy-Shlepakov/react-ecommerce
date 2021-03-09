export const storeCartItems = cartItems => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
};

export const sumItems = cartItems => {
    storeCartItems(cartItems);
    return {
        itemCount: cartItems.reduce((total, product) => total + product.quantity, 0),
        total: cartItems.reduce((total, product) => total + (product.quantity * product.price), 0),
    }
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            const newCartItems = [...state.cartItems];
            return {
                ...state,
                cartItems: newCartItems,
                ...sumItems(newCartItems)
            }
        }
        case "INCREASE":
            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems[increaseIndex].quantity++;
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        case "DECREASE":
            const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems[decreaseIndex].quantity > 1 && state.cartItems[decreaseIndex].quantity--;
            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        case "REMOVE_ITEM":
            const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cartItems: [...newCartItems],
                ...sumItems(newCartItems)
            }

        case "CLEAR":
            return {
                ...state,
                cartItems: [],
                ...sumItems([])
            }

        default:
            return state
    }
}

export default cartReducer;
