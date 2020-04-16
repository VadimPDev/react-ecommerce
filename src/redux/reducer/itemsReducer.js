import {FETCH_START,FETCH_SUCCESS} from '../types'
const initalState = {
    items:[],
    loading:false
}

export const itemsReducer = (state = initalState,action) =>{
    switch(action.type){
        case FETCH_START:
            return {...state,loading:true}
        case FETCH_SUCCESS:
            return {...state,items:action.payload,loading:false}    
        default:
            return state
    }
}