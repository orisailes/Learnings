import React from 'react'
import { useSelector } from 'react-redux'
import { IState, Product } from '../../interfaces'
import '../css/cart.css'
import ProductsCard from '../utils/ProductsCard'


const Cart: React.FC = () => {

    const cart = useSelector((state: IState) => state.cart)

    return (
        <div className='cart-container'>
            {
                cart.length>0 &&
                cart.map(
                    (product: Product) => <ProductsCard product={product} />
                )
            }

        </div>
    )
}

export default Cart