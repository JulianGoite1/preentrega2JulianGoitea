import React from 'react'
import {Badge} from 'antd'
import './CartWidget.css'
import carrito from '../../assets/carrito.png' //cart img

function CartWidget() {
    return (
        <>
            <Badge className='numshop' count={99} overflowCount={10}>
                <img src={carrito}/>
            </Badge>
        </>
    )
}

export default CartWidget