import { combineReducers } from 'redux'
import { GET_PRODUCTS, actionType, SET_CART_ITEM } from '../../interfaces'
// //! Add types


const productsReducer = (state = [], action: actionType) => {

    switch (action.type) {

        case GET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}

const cartReducer = (state = [], action: actionType) => {
    switch (action.type) {
        case SET_CART_ITEM:
            return [...state, action.payload]
        default:
            return state
    }
}

export default combineReducers({
    products: productsReducer,
    cart: cartReducer
})