import {itemsReducer} from './itemsReducer'
import { fetchItemsStart, fetchItemsSuccess } from '../actions/items'

let state = {
    items:[],
    loading:false
}

it('loading should be started',()=>{
    let action = fetchItemsStart()

    let newState = itemsReducer(state,action)

    expect(newState.loading).toBe(true)
})

it('length of items should be increment and loading should be false',()=>{
    let payload = [{id:2,title:'Table 2',desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo.',img:'https://www.misura.com.au/ShowImage/stratos-wood-table/category_list/304-304-c7adc01e4f2a4572.jpg',price:109.2}]
    let action = fetchItemsSuccess(payload)

    let newState = itemsReducer(state,action)
    expect(newState.loading).toBe(false)
    expect(newState.items.length).toBe(1)
    
})
