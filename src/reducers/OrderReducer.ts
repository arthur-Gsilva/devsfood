import { Product } from "@/types/product"
import { ReducerActionType } from "@/types/reducerAction"

export type orderType = {
    products: Product[],
    address: string,
    total: number
}

export const orderInitialState: orderType = {
    products: [],
    address: '',
    total: 0
}


export const OrderReducer = (state: orderType, action: ReducerActionType) => {
    switch(action.type){
        case "CHANGE_PRODUCTS":
            return {...state, products: action.payload.products}
        break;
        case "CHANGE_ADDRESS":
            return {...state, address: action.payload.address}
        break
        case "CHANGE_TOTAL":
            return {...state, total: action.payload.total}
        break
    }

    return state
}