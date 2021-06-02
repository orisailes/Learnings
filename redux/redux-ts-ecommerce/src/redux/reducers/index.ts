import { combineReducers } from 'redux'
import { GET_PRODUCTS,actionType } from '../../interfaces'
// //! Add types


const productsReducer = (state = [], action:actionType) => {
    switch (action.type) {

        case GET_PRODUCTS:
            return [...state, action.payload]

        default:
            return state
    }
}


export default combineReducers({
    products: productsReducer
})