import { GET_PRODUCTS, Product } from '../../interfaces'
import { Dispatch } from 'redux'
import axios from 'axios';

// import dispatch to async calls, import string variables and types
//! Add types

export const getInitialProducts = () => {

    return async (dispatch: Dispatch) => {
        let data: object
        let productsArray: Product[]
        try {
            data = await axios.get('https://fakestoreapi.com/products')
            console.log(data);
            data && dispatch({ type: GET_PRODUCTS, data })
        } catch (error) {
            console.log(error.message);
        }
    }

}