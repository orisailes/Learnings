import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Product } from '../../interfaces'
import '../css/products.css'


const Products: React.FC = () => {

    const products = useSelector((state: any) => state.products)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    useEffect((): void => {
        const fetchData = async () => {
            dispatch(getInitialProducts())
        }
        fetchData()
        setIsLoading(false)
    }, [])

    return (
        <div className='products-page'>
            {isLoading && <h3>Loading...</h3>}
            products: {JSON.stringify(products)}
        </div>
    )
}

export default Products