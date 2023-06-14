import { ReducerActionType } from "@/types/reducerAction"

export type registerType = {
    register: boolean
}

export const registerInitialState: registerType = {
    register: false
}


export const RegisterReducer = (state: registerType, action: ReducerActionType) => {
    switch(action.type){
        case "CHANGE_REGISTER":
            return {...state, register: action.payload.register}
        break;
    }

    return state
}