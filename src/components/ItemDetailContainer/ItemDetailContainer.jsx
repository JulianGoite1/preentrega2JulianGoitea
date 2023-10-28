import { Card, Button } from 'antd';
import { useState, useEffect, React } from 'react';
import { useParams, Link } from 'react-router-dom'
import './ItemDetalContainer.css'
import Item from '../Item/Item';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProducts(json)
            })
            .catch(error => console.error(error))
    }, [id])

    return(
        <>
            <div className='detailitemcontainer'>
                <Card className='cardbody' hoverable>
                    <img className='detailitemimg' src={products?.image}></img>
                    <h3>{products?.title}</h3> 
                    <p className='detailitemtxt'>{products?.description}</p> 
                    <p className='detailitemprice'>${products?.price}</p>
                    <Button className='detailbtnbuy'>Comprar</Button>
                </Card>
            </div>
        </>
    )
}

// function ItemDetailContainer = () => {
//     const { id } = useParams()
//     return(
//         <Route path='/item/:id' Component={ItemDetailContainer} />
//     )
// }

export default ItemDetailContainer