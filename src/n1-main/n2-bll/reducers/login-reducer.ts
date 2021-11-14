import {Dispatch} from "redux";
import {loginAPI, LoginType} from "../../n3-dal/api-login";


const initialState = {
    status: "idle",
    isLogged: false,
    isInitialize: false,
    error: "",

}

export const loginReducer = (state: initialStateType = initialState, action: CombineActionType): initialStateType => {
    switch (action.type) {
        case "SET-IS-LOGGED-IN-STATUS": {
            return {...state, isLogged: action.value}
        }
        case "SET-IS-INITIALIZED-STATUS": {
            return {...state, isInitialize: action.value}
        }
        case "SET-ERROR":{
            return {...state,error:action.error}
        }

        default:
            return state
    }
}


//Actions
export const setAppErrorAC = (error: string ) => ({type: 'SET-ERROR', error} as const)

export const setIsLoggedInAC = (value: boolean) => {
    return {type: "SET-IS-LOGGED-IN-STATUS", value} as const
}
export const setIsInitializedAC = (value: boolean) => {
    return {type: "SET-IS-INITIALIZED-STATUS", value} as const
}


//Thunks
export const LoginTC = ({email, password, rememberMe}: LoginType) => (dispatch: Dispatch) => {
    loginAPI.login({email, password, rememberMe})
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            console.log(res.data)
        })
        .catch(e => {
          dispatch(setAppErrorAC(e.response.data.error))
        })
}
export const LogoutTC = () => (dispatch: Dispatch) => {
    loginAPI.logout()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
            console.log(res.data)
        })
}
export const initializeTC = () => (dispatch: Dispatch) => {
    loginAPI.me()
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setIsInitializedAC(true))
            console.log(res.data)
        })
        .finally(() => {
            dispatch(setIsInitializedAC(true))
        })
}

//Types
export type CombineActionType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppErrorAC>


type initialStateType = typeof initialState