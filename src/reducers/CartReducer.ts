import { Product } from "@/types/product"
import { ReducerActionType } from "@/types/reducerAction"


export type cartType = {
    products: Product[],
    address: string[],
    discount: number,
    delivery: number
}

export const cartInitialState: cartType = {
    products:[],
    address:[],
    discount: 0,
    delivery: 0
}

export default (state = cartInitialState, action: ReducerActionType) => {

    let products = [...state.products]
    let key: any = null

    if (action.payload && action.payload.key) {
        key =  action.payload.key;
    }

    let index2 = products.findIndex(item => item.id === key)

    switch(action.type){
        case 'ADD_PRODUCT':
            
            let id = action.payload.data.id
            const index = products.findIndex(item => item.id === id)
            
            if(index > -1){
                products[index].quantity += action.payload.quantity
            } else{
                products.push({
                    ...action.payload.data,
                    quantity: action.payload.quantity
                })
            }


            return {...state, products}
        break;

        case 'ADD_QUANTITY':
            products[index2].quantity += 1
        break;
        case 'LOW_QUANTITY':
            products[index2].quantity -= 1
        break;
        case 'REMOVE_PRODUCTS':
            return {...state, products: []}
        break;
    }

    return state
}