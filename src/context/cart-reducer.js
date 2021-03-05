export const sumItems = cartItems => {
    return {
        itemCount: cartItems.reduce((total, product) => total = total + product.quantity, 0),
        total: cartItems.reduce((total, product) => total = total + (product.quantity * product.price)),
    }
};


const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_ITEM':
            if(!state.cartItems.find(item => item.id === action.payload.id)) return {
                ...state,
                cartItems: [
                    ...state.cartItems.push({
                        ...action.payload,
                        quantity: 1,
                    })
                ],
                ...sumItems(state.cartItems)
            }

        default:
            return state
    }
}

export default cartReducer;