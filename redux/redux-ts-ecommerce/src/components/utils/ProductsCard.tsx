import React, { useState } from 'react'
import { Product } from '../../interfaces'
import '../css/product-card.css'

interface Props {
    product: Product
    addToCart?: (product: Product) => void
}

const ProductsCard = ({ product, addToCart }: Props) => {

    const [readMore, setReadMore] = useState(false)

    const toggleReadMore = () => {
        setReadMore(prev => !prev)
    }


    return (
        <div key={product.id} className='product-card'>
            <img src={product.image} alt={product.title} ></img>
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <p>
                {readMore ? product.description : product.description.slice(0, 200)}
                <button onClick={toggleReadMore} className='btn read-more-btn'>
                    {readMore ? '...Read Less' : '...Read More'}
                </button>
            </p>
            <div>
                <strong> {product.price} $ </strong>
                {addToCart ?
                    <button className='btn add-tocart-btn' onClick={() => addToCart(product)}>Add To Cart</button>
                    :
                    <button>
                        Procces to checkout
                    </button>
                }

            </div>
        </div>
    )
}

export default ProductsCard
