export const GET_PRODUCTS = 'GET_PRODUCTS'
export const SET_CART_ITEM = 'SET_CART_ITEM'

export type actionType = {
    type: string,
    payload: Product[] | Product
}

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export interface IState {
    products: Product[] | []
    cart: Product[] | []
}