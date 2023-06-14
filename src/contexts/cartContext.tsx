import CartReducer, { cartInitialState, cartType } from "@/reducers/CartReducer";
import { RegisterReducer, registerInitialState, registerType } from "@/reducers/RegisterReducer";
import { UserReducer, userInitialState, userType } from '@/reducers/UserReducer'
import { ReducerActionType } from "@/types/reducerAction";
import { createContext, useReducer } from "react";

type initialStateType = {
    cart: cartType,
    register: registerType,
    user: userType
}

type contextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>,
}

const initialState = {
    cart: cartInitialState,
    register: registerInitialState,
    user: userInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: () => null,
})

const mainReducer = (state: initialStateType, action: ReducerActionType) => ({
    cart: CartReducer(state.cart, action),
    register: RegisterReducer(state.register, action),
    user: UserReducer(state.user, action)
})

export const ContextProvider = ({ children }: React.PropsWithChildren) => {

    const [state, dispatch] = useReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}