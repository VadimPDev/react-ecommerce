import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Format from 'react-currency-format'
import { useEffect } from 'react'
import { fetchItems } from '../redux/actions/items'
import { Loader } from '../components/UI/Loader'
import { useCart } from '../hooks/CartHook'

export const DetailPage = () =>{

    const id = parseInt(useParams().id)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchItems())
    },[dispatch])

    
    const itemsState = useSelector(state => state.items.items)
    const item = itemsState.find(i => i.id === id)
    const loading = useSelector(state => state.items.loading)


    const {add} = useCart()

    if(loading){
        return <Loader />
    }
    if(!item) {
        return <div className='row justify-content-center mt-5'><p>Такого продукта не сущесвует</p></div>
    }
    return (
        <div className='row justify-content-center mt-4'>
            <div className="col-6 info-block-left" >
               <img src={item.img} alt='main img'/>
            </div>
            <div className="col-6 info-block" >
                    <h2>{item.title}</h2>
                    <p style={{fontWeight:'700',fontSize:'21px'}}><Format value={item.price} displayType='text' thousandSeparator={true} prefix={'$'} /></p>
                    <button className='btn btn-danger' onClick={()=> add(item)}>Add To Cart</button>
            </div>
            <div className="col-12 mt-3">
                <div className="card bg-light mb-3" >
                    <div className="card-header">Описание</div>
                    <div className="card-body">
                        <p className="card-text">{item.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}