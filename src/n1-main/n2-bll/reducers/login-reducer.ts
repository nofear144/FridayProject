import {Dispatch} from "redux";
import {loginAPI, LoginType} from "../../n3-dal/api-login";


const initialState: stateType = {
    status: "idle",
    isLogged: false,
    isInitialize: false,
    error: "",
}

export const loginReducer = (state = initialState, action: CombineActionType): stateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN-STATUS": {
            return {...state, isLogged: action.value}
        }
        case "login/SET-IS-INITIALIZED-STATUS": {
            return {...state, isInitialize: action.value}
        }
        case "login/SET-ERROR": {
            return {...state, error: action.error}
        }
        case "login/SET-STATUS": {
            return {...state, status: action.status}
        }

        default:
            return state
    }
}


//Actions
export const setAppErrorAC = (error: string) => ({type: 'login/SET-ERROR', error} as const)

export const setIsLoggedInAC = (value: boolean) => {
    return {type: "login/SET-IS-LOGGED-IN-STATUS", value} as const
}
export const setIsInitializedAC = (value: boolean) => {
    return {type: "login/SET-IS-INITIALIZED-STATUS", value} as const
}
export const setStatusAC = (status: RequestStatusType) => {
    return {type: "login/SET-STATUS", status} as const
}


//Thunks
export const LoginTC = ({email, password, rememberMe}: LoginType) => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    loginAPI.login({email, password, rememberMe})
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setStatusAC("succeeded"))
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC("idle"))
        })
}
export const LogoutTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    loginAPI.logout()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setStatusAC("succeeded"))
            console.log(res.data)
        })
}
export const initializeTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    loginAPI.me()
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setIsInitializedAC(true))
            dispatch(setStatusAC("succeeded"))
            console.log(res.data)
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
        })
        .finally(() => {
            dispatch(setIsInitializedAC(true))
        })
}

//Types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type CombineActionType =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppErrorAC>


export type stateType = {
    status: RequestStatusType,
    isLogged: boolean,
    isInitialize: boolean,
    error: string,
}