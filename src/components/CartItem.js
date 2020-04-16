import React from 'react'
import Format from 'react-currency-format'

export const CartItem =({item,deleteHandler}) =>{
    return (
        <tr>
            <td><img src={item.img} alt='img cart' width='50px' height='50px'/> </td>
            <td>{item.title}</td>
            <td>In stock</td>
            <td className="text-right"><Format value={item.price} displayType='text' thousandSeparator={true} prefix={'$'} /></td>
            <td className="text-right"><button className="btn btn-sm btn-danger" onClick={()=> deleteHandler(item.id)}><i className="fa fa-trash"></i> </button> </td>
        </tr>
    )
}