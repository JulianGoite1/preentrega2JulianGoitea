import { useState, useEffect, React } from 'react'
import { Button, Card } from 'antd';
import { useParams, Link } from 'react-router-dom'; 
import Item from '../Item/Item';
import './ItemListContainer.css'



function ItemListContainer() {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
        const url = categoryId ? `https://fakestoreapi.com/products/category/${categoryId}` : `https://fakestoreapi.com/products`
        fetch(url)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProducts(json)
            })
            .catch(error => console.error(error))
            console.log(categoryId)
    }, [categoryId])

    return (
        <>
        <h1>Todos los productos</h1>
        <div className='mapcontainer'>
        {products.map((prod, index) => <Item key={index} producto={prod} />)}
        </div>
        </>
    )
}

export default ItemListContainer