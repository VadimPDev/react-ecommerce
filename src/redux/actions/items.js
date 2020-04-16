import {FETCH_START,FETCH_SUCCESS} from '../types'

const items = [
    {id:1,title:'Table 1',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2},
    {id:2,title:'Table 2',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2},
    {id:3,title:'Table 3',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2},
    {id:4,title:'Table 4',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2},
    {id:5,title:'Table 5',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2},
    {id:6,title:'Table 6',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:11285.56},
]
export function fetchItems(){
    return dispatch =>{
        dispatch(fetchItemsStart())
        setTimeout(()=>{
            dispatch(fetchItemsSuccess(items))
        },1000)
    }
}

export function fetchItemsStart(){
    return {
        type:FETCH_START
    }
}
export function fetchItemsSuccess(payload){
    return {
        type:FETCH_SUCCESS,
        payload
    }
}