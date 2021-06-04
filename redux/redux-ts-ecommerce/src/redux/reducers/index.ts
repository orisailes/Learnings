import { combineReducers } from 'redux'
import { GET_PRODUCTS, SET_CART_ITEM, REMOVE_FROM_CART, Product, IAction } from '../../interfaces'


const productsReducer = (state = [], action: IAction['productReducer']) => {

    switch (action.type) {

        case GET_PRODUCTS:
            return action.payload
        default:
            return state
    }
}

const cartReducer = (state = [], action: IAction['cartReducer']) => {
    switch (action.type) {
        case SET_CART_ITEM:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            if('id' in action.payload){
                return state.filter((prod: Product) => prod.id !== action.payload.id )
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