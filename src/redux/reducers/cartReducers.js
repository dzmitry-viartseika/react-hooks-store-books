import { ADD_TO_CART } from '../../constants/mutationsTypes';

const initialState = {
    cartItems: [],
};

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.payload
                ]
            }
    }
    return state;
}
