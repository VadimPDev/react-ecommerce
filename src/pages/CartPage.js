import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Format from 'react-currency-format'
import { Link } from 'react-router-dom'
import {CartItem} from '../components/CartItem'
import { deleteItem } from '../redux/actions/cart'

export const CartPage = () =>{

    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()



    if(!cartItems.length) {
        return <div className='row justify-content-center mt-5'><p>Ваша корзина пуста</p></div>
    }

    let totalPrice = 0
    const shipping = 6.97

    const deleteHandler = (id) =>{
        dispatch(deleteItem(id))
    }


    return (
        <div className="row mt-5 mb-4">
        <div className="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col" className="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item,index) =>{
                            totalPrice += item.price
                            return <CartItem item={item} deleteHandler={deleteHandler} key={index}/>
                        })}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub-Total</td>
                            <td className="text-right"><Format value={totalPrice} displayType='text' thousandSeparator={true} decimalScale={2} prefix={'$'} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Shipping</td>
                            <td className="text-right"><Format value={shipping} displayType='text' thousandSeparator={true} prefix={'$'} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong><Format value={totalPrice + shipping} displayType='text' thousandSeparator={true}  decimalScale={2} prefix={'$'} /></strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col mb-2">
            <div className="row">
                <div className="col-sm-12  col-md-6">
                    
                    <Link to='/' className='btn btn-block btn-light'>Continue Shopping</Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                    <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                </div>
            </div>
        </div>
    </div>
    )
}