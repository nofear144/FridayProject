import {Dispatch} from "redux";
import {apiRegistration} from "../../n3-dal/api-registration";

const initialState = {
    email: "",
    password: ""
}
export const registrationReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "SEND-FORM": {
            return {...state,email: action.email,password: action.password}
        }
        default:
            return state
    }
}

//Actions
export const sendFormAC = (email:string,password:string) => {
    return {
        type:"SEND-FORM",
        email,
        password
    }as const
}


//Thunks
export const sendFormTC = (email:string, password:string) => (dispatch:Dispatch) => {
    apiRegistration.registration({email,password})
        .then(res=>dispatch(sendFormAC(email,password)))
}

//Types
export type ActionTypes = SendFormACType
export type SendFormACType = ReturnType<typeof sendFormAC>
type initialStateType = typeof initialState