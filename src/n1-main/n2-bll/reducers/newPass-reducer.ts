import {NewPasswordAPI, setNewPasswordType} from "../../n3-dal/api-newPassword";
import {Dispatch} from "redux";

const initialState: initialStateType = {
    status: "idle",
    error: "",
}
export const newPassReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_ERROR: {
            return {...state, ...action.payload}
        }
        case SET_LOADING_STATUS: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

//Actions
const setError = (error: string) => {
    return {type: SET_ERROR, payload: {error}} as const
}
export const setNewEmailStatus = (status: statusType) => {
    return {type: SET_LOADING_STATUS, payload: {status}} as const
}

//Thunks
export const sendNewPasswordWithToken = (payload: setNewPasswordType) => (dispatch: Dispatch) => {
    dispatch(setNewEmailStatus("loading"))
    NewPasswordAPI.sendNewPasswordWithToken(payload)
        .then((data) => {
                dispatch(setNewEmailStatus("success"))
            }
        )
        .catch((e) => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setError(error));
            dispatch(setNewEmailStatus("idle"))
        })
}


//Types
type initialStateType = {
    status: statusType,
    error: string
}
type ActionsType = ReturnType<typeof setError> | ReturnType<typeof setNewEmailStatus>
export type statusType = "idle" | "loading" | "success"

//Constants
const SET_ERROR = "newPassword/SET_ERROR"
const SET_LOADING_STATUS = "newPassword/SET_LOADING_STATUS"