export const GET_PRODUCTS = 'GET_PRODUCTS'

export type actionType = {
    type:string,
    payload?:any
}

export type Product = {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
}