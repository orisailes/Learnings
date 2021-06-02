import { combineReducers } from 'redux'
import { GET_PRODUCTS, actionType, SET_CART_ITEM, REMOVE_FROM_CART, Product } from '../../interfaces'


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
        case REMOVE_FROM_CART:
            if('id' in action.payload){
                return state.filter((prod: Product) => prod.id !== (action.payload as Product).id )
            }
            return state
        default:
            return state
    }
}

export default combineReducers({
    products: productsReducer,
    cart: cartReducer
})