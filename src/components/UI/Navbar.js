import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navbar = () =>{

    const cart = useSelector(state => state.cart.cartItems)

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link to='/' className='navbar-brand'>E-Commerce</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className='nav-link' activeClassName='active' exact>Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/cart' className='nav-link' activeClassName='active'>Корзина <span className="badge badge-light">{cart.length}</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}