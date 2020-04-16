import {cartReducer} from './cartReducer'
import {addToCart,deleteItem,} from '../actions/cart'

let state ={
    cartItems:[{id:2,title:'Table 2',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2}]
}

it('length of carts should be increment',()=>{
    let item = {id:1,title:'Table 1',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2}
    
    let action = addToCart(item)

    let newState = cartReducer(state,action)

    expect(newState.cartItems.length).toBe(2)
})

it('length of carts should be decrement',()=>{
    let id = 2 
    let action = deleteItem(id)
    let newState = cartReducer(state,action)
    expect(newState.cartItems.length).toBe(0)
})

