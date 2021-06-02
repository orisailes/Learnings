import { GET_PRODUCTS, SET_CART_ITEM,REMOVE_FROM_CART , Product, actionType } from '../../interfaces'
import { Dispatch } from 'redux'
import axios from 'axios';



export const getInitialProducts = () => {

    return async (dispatch: Dispatch) => {
        let data
        let productsArray: Product[]
        let action: actionType
        try {
            data = await axios.get('https://fakestoreapi.com/products')
            console.log('data: ', data);
            productsArray = data.data
            action = { type: GET_PRODUCTS, payload: productsArray }
            data && dispatch(action)
        } catch (error) {
            console.log(error.message);
        }
    }

}

export const addItemToCart = (product: Product) => {

    return {
        type: SET_CART_ITEM,
        payload: product
    }

}

export const removeItemFromCart = (product:Product) => {
    
    return{
        type: REMOVE_FROM_CART,
        payload:product
    }

}
