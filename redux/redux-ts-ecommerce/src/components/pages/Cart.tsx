import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IState, Product } from '../../interfaces'
import { removeItemFromCart } from '../../redux/actions'
import '../scss/cart.css'
import ProductsCard from '../utils/ProductsCard'


const Cart: React.FC = () => {

    const cart = useSelector((state: IState) => state.cart)
    const dispatch = useDispatch()

    console.log(cart);

    const deleteFromCart = (product: Product): void => {
        dispatch(removeItemFromCart(product))
    }


    return (
        <div className='cart-container'>
            {
                cart.length > 0 &&
                cart.map(
                    (product: Product) =>
                        <ProductsCard product={product} key={product.id} deleteFromCart={deleteFromCart} />
                )
            }
        </div>
    )
}

export default Cart