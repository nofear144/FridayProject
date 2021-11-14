import {Dispatch} from "redux";
import {apiRegistration} from "../../n3-dal/api-registration";

const initialState = {
    error: null as null | string,
    status: 'idle',
    isRegister: false,
}
export const registrationReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'registration/SET-ERROR':
            return {...state, error: action.error}
        case 'registration/SET-STATUS':
            return {...state, status: action.status}
        case "registration/SET-REGISTER": {
            return {...state, isRegister: action.isRegister}
        }
        default:
            return state
    }
}


//Actions
export const setStatusAC = (status: RequestStatusType) => ({type: 'registration/SET-STATUS', status} as const)
export const setRegisterAC = (isRegister: boolean) => ({type: 'registration/SET-REGISTER', isRegister} as const)
export const setErrorAC = (error: string | null) => ({type: 'registration/SET-ERROR', error} as const)


//Thunks
export const sendFormTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    apiRegistration.registration({email, password})
        .then(res => {
            dispatch(setStatusAC('succeeded'))
            dispatch(setErrorAC(null))
            dispatch(setRegisterAC(true))
        })
        .catch(err => {
            dispatch(setStatusAC('failed'))
            const error = err.response
                ? err.response.data.error
                : (err.message + 'some message from backend')
            dispatch(setErrorAC(error))
        })
}

//Types
export type ActionTypes = SetErrorACType | SetStatusACType | IsRegisterACType
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type SetErrorACType = ReturnType<typeof setErrorAC>
export type SetStatusACType = ReturnType<typeof setStatusAC>
export type IsRegisterACType = ReturnType<typeof setRegisterAC>
type initialStateType = typeof initialState