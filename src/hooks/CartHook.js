import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/actions/cart"
import { useMessage } from "./MessageHook"

export const useCart =() =>{

    const dispatch = useDispatch()
    const message = useMessage()

    const add = useCallback(item =>{
        dispatch(addToCart(item))
        message('Товар добавлен в корзину')
    },[dispatch,message])


    return {add}
}