import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart, getInitialProducts } from '../../redux/actions'
import '../css/products.css'
import { IState, Product } from '../../interfaces'
import ProductsCard from '../utils/ProductsCard'


const Products: React.FC = ():JSX.Element => {

    const products = useSelector((state: any) => state.products)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(products.length ? false : true)
    const cart = useSelector((state: IState) => state.cart)
    useEffect((): void => {
        const fetchData = async () => {
            await dispatch(getInitialProducts())
            setIsLoading(false)
        }
        if (!products.length) fetchData()

    }, [])

    const addToCart = (product: Product): void => {
        const isDuplicate = cart.some((item: Product) => item.title === product.title)
        if(!isDuplicate) dispatch(addItemToCart(product))
    }

 

    return (
        <div className='products-page'>
            {isLoading && <h3>Loading...</h3>}
            {
                products.length > 0 &&

                <div className='products-card-container'>
                    {
                        products.map(
                            (product: Product) => <ProductsCard product={product} key={product.id} addToCart={addToCart} />
                        )
                    }

                </div>

            }
        </div>
    )
}

export default Products