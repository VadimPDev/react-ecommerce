import React, { useEffect, } from 'react'
import { ItemsList } from '../components/ItemsList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../redux/actions/items'
import { Loader } from '../components/UI/Loader'



export const MainPage =() =>{
    const dispatch = useDispatch()

    const items = useSelector(state => state.items.items)
    console.log(items)
    const loading = useSelector(state => state.items.loading)


    useEffect(()=>{
        dispatch(fetchItems())
    },[dispatch])

    return (
        <div className='row justify-content-center mt-4'>
            {loading ? <Loader />:<ItemsList items={items} />}
        </div>
    )
}
