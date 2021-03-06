import React from 'react'
import {Link} from 'react-router-dom'
import '../scss/navbar.css'

const Navbar:React.FC = ():JSX.Element => {
    return (
        <div className='navbar'>
            <Link to='/cart'>Cart</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}

export default Navbar