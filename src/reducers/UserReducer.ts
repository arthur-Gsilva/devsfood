import { ReducerActionType } from "@/types/reducerAction"

export type userType = {
    name: string,
    email: string,
    tel: string,
    address: string
}

export const userInitialState: userType = {
    name: '',
    email: '',
    tel: '',
    address: ''
}


export const UserReducer = (state: userType, action: ReducerActionType) => {
    switch(action.type){
        case "CHANGE_FIELDS":
            return {...state, address: action.payload.address}
        break;
    }

    return state
}