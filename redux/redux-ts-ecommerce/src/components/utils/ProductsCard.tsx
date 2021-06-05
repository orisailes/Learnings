import React, { useState } from 'react'
import { Product } from '../../interfaces'
import '../scss/product-card.css'

interface Props {
    product: Product
    addToCart?: (product: Product) => void
    deleteFromCart?: (product: Product) => void
}

const ProductsCard = ({ product, addToCart, deleteFromCart }: Props): JSX.Element => {

    const [readMore, setReadMore] = useState(false)

    const toggleReadMore = () => {
        setReadMore(prev => !prev)
    }
    
    return (
        <div className='product-card'>
            <img src={product.image} alt={product.title} ></img>
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <p>
                {readMore ? product.description : product.description.slice(0, 200)}
                {product.description.length > 200 &&
                    <button onClick={toggleReadMore} className='btn read-more-btn'>
                        {readMore ? '...Read Less' : '...Read More'}
                    </button>
                }
            </p>
            <div>
                <strong> {product.price} $ </strong>
                {addToCart &&
                    <button className='btn add-to-cart-btn' onClick={() => addToCart(product)}>Add To Cart</button>
                }
                {
                    deleteFromCart &&
                    <button className='btn remove-from-cart-btn' onClick={() => deleteFromCart(product)}>
                        Delete item
                    </button>
                }

            </div>
        </div>
    )
}

export default ProductsCard
