export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_CART_ITEM = 'SET_CART_ITEM'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

type Payload =  // fix needed
|any 
|Product[]

export type actionType = {
    type: string,
    payload:Payload // Product[] | Productis invalid 
}

export interface IState {
    products: Array<Product>
    cart: Array<Product>
}