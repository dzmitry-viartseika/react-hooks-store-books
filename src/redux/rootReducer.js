import { combineReducers } from 'redux';
import { cartReducers } from './reducers/cartReducers';

export const rootReducer = combineReducers({
    cart: cartReducers,
})
