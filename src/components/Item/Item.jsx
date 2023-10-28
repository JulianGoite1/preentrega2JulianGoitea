import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import './Item.css'

const { Meta } = Card;
const Item = ({producto}) => (
    <>
    <div className='cardcontainer'>

        <Card className='cardbody' hoverable> 
        <img className='image' src={producto.image} alt={producto.title} />
        <Meta title={producto.title} description={producto.price}/>
        <div className='btncard'>
        <Button type="primary"><Link to={`/Item/${producto.id}`}>Ver más</Link></Button>
        </div>
        </Card>
        
    </div>
    </>
);
export default Item;