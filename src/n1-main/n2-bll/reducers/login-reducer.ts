import {Dispatch} from "redux";
import {loginAPI, LoginType} from "../../n3-dal/api-login";
import {setUserProfileAC} from "./profile-reducer";
import {setAppErrorAC, setIsInitializedAC, setStatusAC} from "./app-reducer";


const initialState = {
    isLogged: false,
}

export const loginReducer = (state:initialStateType = initialState, action: CombineActionType): initialStateType => {
    switch (action.type) {

        case "login/SET-IS-LOGGED-IN-STATUS": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}



//Actions

export const setIsLoggedInAC = (isLogged: boolean) => {
    return {type: "login/SET-IS-LOGGED-IN-STATUS", payload: {isLogged}} as const
}

//Thunks
export const LoginTC = ({email, password, rememberMe}: LoginType) => (dispatch: Dispatch) => {
    dispatch(setStatusAC("loading"))
    loginAPI.login({email, password, rememberMe})
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setStatusAC("succeeded"))
            dispatch(setUserProfileAC(res.data._id, res.data.name, res.data.avatar))

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
        .then(data => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setIsInitializedAC(true))
            dispatch(setStatusAC("succeeded"))
            console.log(data)
        })
        .catch(e => {
            dispatch(setAppErrorAC(e.response.data.error))
            dispatch(setStatusAC("succeeded"))
        })
        .finally(() => {
            dispatch(setIsInitializedAC(true))
        })
}

//Types
export type CombineActionType =
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setUserProfileAC>

type initialStateType = typeof initialState
