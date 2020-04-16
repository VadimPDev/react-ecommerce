import { ADD_ITEM, DELETE_ITEM } from "../types"

const initialState ={
    cartItems:[]
}

export const cartReducer = (state= initialState,action) =>{
    switch(action.type){
        case ADD_ITEM:
            return {...state,cartItems:state.cartItems.concat(action.payload)}
        case DELETE_ITEM:
            return {...state,cartItems:state.cartItems.filter(i => i.id !== action.payload)}    
        default:
            return state
    }
}