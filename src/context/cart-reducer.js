export const sumItems = cartItems => {
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

        default:
            return state
    }
}

export default cartReducer;
