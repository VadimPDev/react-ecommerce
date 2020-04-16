import React from 'react'
import {Link} from 'react-router-dom'
import Format from 'react-currency-format'
import { useCart } from '../hooks/CartHook'

export const Item =({item}) =>{

    const {add} = useCart()
  
    return (
        <div className="card" style={{width:'18rem',margin:'10px'}}>
                    <img className="card-img-top" src={item.img} alt='img' width='250px' height='150px'/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text" style={{fontWeight:'700'}}><Format value={item.price} displayType='text' thousandSeparator={true} prefix={'$'} /></p>
                       <div className="card-buttons">
                            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Detail</Link>
                            <button className='btn btn-danger' onClick={() => add(item)}>Add To Cart</button>
                       </div>
                    </div>
        </div>
    )
}