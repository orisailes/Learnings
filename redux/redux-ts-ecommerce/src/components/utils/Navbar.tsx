import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'

const Navbar:React.FC = () => {
    return (
        <div className='navbar'>
            <Link to='/cart'>Cart</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}

export default Navbar