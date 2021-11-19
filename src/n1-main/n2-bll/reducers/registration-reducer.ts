import {Dispatch} from "redux";
import {apiRegistration, RegistrationDataType} from "../../n3-dal/api-registration";
import {setAppErrorAC, setStatusAC} from "./app-reducer";

const initialState = {
    isRegister: false,
}
export const registrationReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "registration/SET-REGISTER": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

//Actions
export const setRegisterAC = (isRegister: boolean) => ({type: 'registration/SET-REGISTER', payload:{isRegister}} as const)

//Thunks
export const sendFormTC = ({email,password}:RegistrationDataType) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    apiRegistration.registration({email, password})
        .then(res => {
            dispatch(setStatusAC('succeeded'))
            dispatch(setAppErrorAC(""))
            dispatch(setRegisterAC(true))
        })
        .catch(err => {
            dispatch(setStatusAC('failed'))
            const error = err.response
                ? err.response.data.error
                : (err.message + 'some message from backend')
            dispatch(setAppErrorAC(error))
        })
}

//Types
export type ActionTypes =  IsRegisterACType
export type IsRegisterACType = ReturnType<typeof setRegisterAC>
type initialStateType = typeof initialState