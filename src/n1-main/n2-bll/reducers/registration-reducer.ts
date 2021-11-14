import {Dispatch} from "redux";
import {apiRegistration} from "../../n3-dal/api-registration";

const initialState = {
    email: "",
    password: "",
    error: null as null | string
}
export const registrationReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "SEND-FORM": {
            return {...state, email: action.email, password: action.password}
        }
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}


//Actions
export const sendFormAC = (email: string, password: string) => {
    return {
        type: "SEND-FORM",
        email,
        password
    } as const
}

export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)


//Thunks
export const sendFormTC = (email: string, password: string) => (dispatch: Dispatch) => {
    apiRegistration.registration({email, password})
        .then(res => dispatch(sendFormAC(email, password)))
        .catch(err => dispatch(setErrorAC(err)))
}

//Types
export type ActionTypes = SendFormACType | SetAppErrorACType
export type SendFormACType = ReturnType<typeof sendFormAC>
export type SetAppErrorACType = ReturnType<typeof setErrorAC>
type initialStateType = typeof initialState