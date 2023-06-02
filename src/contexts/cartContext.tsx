import CartReducer, { cartInitialState, cartType } from "@/reducers/CartReducer";
import { ReducerActionType } from "@/types/reducerAction";
import { createContext, useReducer } from "react";

type initialStateType = {
    cart: cartType
}

type contextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    cart: cartInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: () => null
})

const mainReducer = (state: initialStateType, action: ReducerActionType) => ({
    cart: CartReducer(state.cart, action)
})

export const ContextProvider = ({ children }: React.PropsWithChildren) => {

    const [state, dispatch] = useReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}