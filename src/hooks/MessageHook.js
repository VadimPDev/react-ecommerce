import { useCallback } from 'react'
import {useToasts} from 'react-toast-notifications'


export const useMessage = () =>{
    const {addToast} = useToasts()
    return useCallback((message)=>{
        addToast(message,{appearance:'success',autoDismiss:true})
    },[addToast])
}