import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'antd'

function Navbar() {

    const arrayDeCategorias = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]

    return (
        <>
        <div className='navbar'>
        <div className='btnnav'><NavLink to={'/'} className={Navbar}>INICIO</NavLink></div>
            {arrayDeCategorias.map((cat, index) =>
            <NavLink to={`/category/${cat}`} className={Navbar} key={index}>{cat}</NavLink>)}
            <CartWidget />
        </div>
        </>
    )
}

export default Navbar